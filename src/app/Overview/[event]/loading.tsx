import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#f5f8fa] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <LoadingSpinner size="lg" colorVariant="primary" />
        <p className="text-gray-700 font-medium">Loading overview...</p>
      </div>
    </div>
  );
}
