import OutlineBtn from "@/components/buttons/OutlineBtn";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-4 text-center
     space-y-6 bg-black/90 text-white"
    >
      <AlertTriangle className="w-16 h-16 text-red-500" />
      <h2 className="text-3xl font-bold">404 - Page Not Found</h2>
      <p className="max-w-md text-gray-300">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <OutlineBtn text="Back to Homepage" href="/" />
    </div>
  );
};

export default NotFound;
