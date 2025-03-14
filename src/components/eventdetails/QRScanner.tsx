import { Scanner } from "@yudiel/react-qr-scanner";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

interface QrScannerComponentProps {
  eventId: string;
}

const QrScannerComponent = ({ eventId }: QrScannerComponentProps) => {
  const router = useRouter();
  const [isScannerLoading, setIsScannerLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    // Extract session ID and WebSocket URL from the query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get("sessionId");
    const wsUrl = urlParams.get("wsUrl");

    if (!sessionId || !wsUrl) {
      console.error("Session ID or WebSocket URL is missing");
      return;
    }

    // Connect to the WebSocket server
    const websocket = new WebSocket(wsUrl);
    setWs(websocket);

    websocket.onopen = () => {
      // Register the phone with the session ID
      websocket.send(JSON.stringify({ type: "register-phone", sessionId }));
    };

    // Cleanup WebSocket on unmount
    return () => {
      if (websocket) {
        websocket.close();
      }
    };
  }, []);

  const handleScan = (data: string | null) => {
    if (data && ws) {
      console.info("Scanned QR Code:", data);

      // Send scanned data to the WebSocket server
      ws.send(
        JSON.stringify({ type: "scan", sessionId: eventId, scannedData: data }),
      );
    }
  };

  const handleError = (error: unknown) => {
    console.error("QR Scan Error:", error);
  };

  return (
    <div className="flex justify-center items-center h-screen relative">
      {isScannerLoading && (
        <div className="absolute flex items-center justify-center inset-0 bg-black/50">
          <LoadingSpinner size="lg" colorVariant="white" />
        </div>
      )}

      <Scanner
        //@ts-ignore
        onScan={handleScan}
        onError={handleError}
        classNames={{
          video: "absolute top-0 left-0 w-full h-full object-cover",
        }}
        videoStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
        onLoad={() => setIsScannerLoading(false)}
      />

      {isNavigating && (
        <div className="absolute flex items-center justify-center inset-0 bg-black/50">
          <LoadingSpinner size="lg" colorVariant="white" />
        </div>
      )}
    </div>
  );
};

export default QrScannerComponent;
