import { fetchIPFSContent } from "@/lib/ipfs-server";
import { base64ToBlob } from "@/utils/helpers";
import { useCallback, useState } from "react";

/**
 * Custom hook for fetching and managing IPFS content via CIDs with server-side caching
 *
 * This hook provides functionality to fetch content from IPFS using Content Identifiers (CIDs),
 * leveraging Next.js server-side caching, with built-in retry logic, status tracking,
 * and automatic base64/Blob conversion.
 *
 * Features:
 * - Server-side caching via Next.js unstable_cache
 * - Automatic base64 to Blob conversion for binary data if  if  if (retryCount < maxRetries) {
          await new Promise((resolve) =>
            setTimeout(resolve, RETRY_DELAY * (retryCount + 1)),
          );
          return fetchWithRetry(CID, retryCount + 1, maxRetries);
        }(retryCount < maxRetries) {
          await new Promise((resolve) =>
            setTimeout(resolve, RETRY_DELAY * (retryCount + 1)),
          );
          return fetchWithRetry(CID, retryCount + 1, maxRetries);
        }(retryCount < maxRetries) {
          await new Promise((resolve) =>
            setTimeout(resolve, RETRY_DELAY * (retryCount + 1)),
          );
          return fetchWithRetry(CID, retryCount + 1, maxRetries);
        }
 * - Automatic retries on failed requests
 * - Status tracking per CID (loading state, errors, last updated timestamp)
 * - Batch fetching support for multiple CIDs
 * - Detailed error handling and status reporting
 *
 * @returns {Object} An object containing:
 *   - fetchCIDContent: (CID: string) => Promise<any>
 *     Main function to fetch IPFS content. Returns the fetched content,
 *     automatically converting base64 to Blob for binary data.
 *
 *   - fetchMultipleCIDs: (CIDs: string[]) => Promise<any[]>
 *     Batch fetch multiple CIDs in parallel. Returns array of results.
 *
 *   - getError: (CID: string) => string | null
 *     Get any error message associated with a specific CID fetch attempt
 *
 *   - isLoading: (CID: string) => boolean
 *     Check if a specific CID fetch is in progress
 *
 *   - getLastUpdated: (CID: string) => number | undefined
 *     Get the timestamp of the last update for a specific CID
 *
 * Types:
 * @typedef {Object} FetchStatus
 * @property {boolean} loading - Whether the fetch is in progress
 * @property {string|null} error - Error message if fetch failed
 * @property {number} [lastUpdated] - Timestamp of last update
 *
 * Constants:
 * - DEFAULT_MAX_RETRIES: 2 attempts
 * - RETRY_DELAY: 1000ms (increases with each retry)
 *
 * Example usage:
 * ```typescript
 * const { fetchCIDContent, fetchMultipleCIDs, getError, isLoading } = useFetchCID();
 *
 * // Single fetch
 * const data = await fetchCIDContent("QmHash...");
 *
 * // Batch fetch
 * const [mainData, logoData, nftData] = await fetchMultipleCIDs([
 *   "QmHash1...",
 *   "QmHash2...",
 *   "QmHash3..."
 * ]);
 *
 * // Check status
 * const loading = isLoading("QmHash...");
 * const error = getError("QmHash...");
 * const lastUpdated = getLastUpdated("QmHash...");
 * ```
 *
 * Note: Binary data (like images) is automatically handled:
 * - Converted to base64 for server-side caching
 * - Converted back to Blob when returned to the client
 * - No manual conversion needed
 */

interface FetchStatus {
  loading: boolean;
  error: string | null;
  lastUpdated?: number;
}

const DEFAULT_MAX_RETRIES = 2;
const RETRY_DELAY = 1000;

export const useFetchCID = () => {
  const [status, setStatus] = useState<Record<string, FetchStatus>>({});

  const updateStatus = useCallback(
    (CID: string, updates: Partial<FetchStatus>) => {
      setStatus((prev) => ({
        ...prev,
        [CID]: { ...prev[CID], ...updates, lastUpdated: Date.now() },
      }));
    },
    [],
  );

  const fetchWithRetry = useCallback(
    async (
      CID: string,
      retryCount = 0,
      maxRetries = DEFAULT_MAX_RETRIES,
    ): Promise<any> => {
      try {
        const response = await fetchIPFSContent(CID);
        if (!response) {
          throw new Error("No response from IPFS");
        }
        return response;
      } catch (error: any) {
        console.error(
          `Attempt ${retryCount + 1} failed for CID ${CID}:`,
          error,
        );

        if (retryCount < maxRetries) {
          await new Promise((resolve) =>
            setTimeout(resolve, RETRY_DELAY * (retryCount + 1)),
          );
          return fetchWithRetry(CID, retryCount + 1, maxRetries);
        }

        // Throw a properly structured error
        throw new Error(
          `Failed to fetch IPFS content after ${maxRetries + 1} attempts: ${error.message}`,
        );
      }
    },
    [],
  );

  const fetchCIDContent = useCallback(
    async (CID: string) => {
      if (!CID) {
        const error = "No CID provided";
        updateStatus("", { loading: false, error });
        return null;
      }

      updateStatus(CID, { loading: true, error: null });

      try {
        let data = await fetchWithRetry(CID, 0, DEFAULT_MAX_RETRIES);

        if (data.isBlob) {
          data = {
            ...data,
            data: base64ToBlob(data.data as string),
          };
        }

        updateStatus(CID, { loading: false });
        return data;
      } catch (error: any) {
        const errorMessage = error.message || "Unknown error occurred";
        console.error(`Error fetching CID ${CID}:`, errorMessage);
        updateStatus(CID, { loading: false, error: errorMessage });
        return null;
      }
    },
    [fetchWithRetry, updateStatus],
  );

  // Batch fetch multiple CIDs
  const fetchMultipleCIDs = useCallback(
    async (CIDs: string[]) => {
      const results = await Promise.all(
        CIDs.map((cid) => fetchCIDContent(cid)),
      );
      return results;
    },
    [fetchCIDContent],
  );

  return {
    fetchCIDContent,
    fetchMultipleCIDs,

    isLoading: useCallback(
      (CID: string) => status[CID]?.loading ?? false,
      [status],
    ),
    getError: useCallback(
      (CID: string) => status[CID]?.error ?? null,
      [status],
    ),
    getLastUpdated: useCallback(
      (CID: string) => status[CID]?.lastUpdated,
      [status],
    ),
  };
};
