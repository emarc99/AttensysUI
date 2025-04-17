import { useState, useEffect } from "react";

interface AccessLinkState {
  url: string | null;
  loading: boolean;
  error: string | null;
  refresh: () => void;
}

export const usePinataAccess = (cid: string): AccessLinkState => {
  const [url, setUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const generateLink = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/access-link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.PINATA_JWT}`,
        },
        body: JSON.stringify({ cid }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate link");
      }

      setUrl(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  // Auto-refresh logic (every 55 minutes to stay ahead of 1hr expiry)
  useEffect(() => {
    generateLink();
    const interval = setInterval(generateLink, 55 * 60 * 1000);
    return () => clearInterval(interval);
  }, [cid]);

  return {
    url,
    loading,
    error,
    refresh: generateLink,
  };
};
