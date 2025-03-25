"use server";

import { blobToBase64 } from "@/utils/helpers";
import { unstable_cache } from "next/cache";
import { pinata } from "../../utils/config";

const DEFAULT_TTL = 1000 * 60 * 30; // 30 minutes
/**
 * Fetches and caches content from IPFS via Pinata gateway
 *
 * This function retrieves content from IPFS using a CID (Content Identifier) and caches the result.
 * It handles both blob data (like images) and JSON data appropriately.
 *
 * The console.log statements are used to verify that caching is working correctly:
 * - If you see the fetch logs multiple times for the same CID within the TTL window (30 mins),
 *   it means caching is not working
 * - If you only see the logs once per CID within the TTL window, caching is working as expected
 *
 * @param CID - The IPFS Content Identifier to fetch
 * @returns {Promise<Object>} Object containing:
 *   - data: The fetched content (base64 encoded if blob)
 *   - isBlob: Boolean indicating if content is blob data
 *   - Other metadata from Pinata response
 * @throws Will throw an error if fetching fails
 */

export const fetchIPFSContent = unstable_cache(
  async (CID: string) => {
    console.log(Date.now(), "Fetching IPFS content from Pinata for CID:", CID);

    if (!CID) {
      throw new Error("Invalid CID provided");
    }

    return pinata.gateways
      .get(CID)
      .then(async (data) => {
        let response = {};

        if (data!.data instanceof Blob) {
          response = {
            ...data,
            data: await blobToBase64(data.data as Blob),
            isBlob: true,
          };
        } else {
          response = {
            ...data,
            isBlob: false,
          };
        }
        console.log(
          Date.now(),
          "Fetched IPFS content from Pinata for  CID:",
          CID,
        );

        return response;
      })
      .catch((error) => {
        const errorMessage = error.message || "Unknown error occurred";
        console.error("Error in fetchIPFSContent:", errorMessage);
        throw new Error(errorMessage);
      });
  },
  ["ipfs-content"],
  { revalidate: DEFAULT_TTL },
);
