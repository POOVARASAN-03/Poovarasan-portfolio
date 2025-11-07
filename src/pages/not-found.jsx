import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-xl border border-gray-200 w-full max-w-md p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="h-8 w-8 text-red-500" />
          <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
        </div>

        <p className="text-sm text-gray-600">
          Did you forget to add the page to the router?
        </p>
      </div>
    </div>
  );
}
