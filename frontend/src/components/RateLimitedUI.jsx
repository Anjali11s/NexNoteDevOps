import { AlertTriangleIcon, ClockIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-red-50 border-l-4 border-red-500 rounded-md shadow-md">
        <div className="flex items-center p-6">
          {/* Icon */}
          <div className="flex-shrink-0">
            <AlertTriangleIcon className="size-7 text-red-600" />
          </div>

          {/* Content */}
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-bold text-red-700">
              Rate Limit Reached
            </h3>
            <p className="text-stone-700">
              You've made too many requests in a short period. Please wait a moment.
            </p>
            <div className="flex items-center gap-2 mt-2 text-sm text-red-600">
              <ClockIcon className="size-4" />
              <span>Try again in a few seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;