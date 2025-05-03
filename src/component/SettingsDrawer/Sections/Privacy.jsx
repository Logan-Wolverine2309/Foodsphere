import { useState } from "react";

export default function Privacy() {
  const [isPrivate, setIsPrivate] = useState(true);
  const [allowDataSharing, setAllowDataSharing] = useState(false);

  return (
    <div className="space-y-4 p-4 bg-gray-900 rounded-xl shadow-lg text-white">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="private"
          checked={isPrivate}
          onChange={() => setIsPrivate(!isPrivate)}
          className="mt-1 h-5 w-5 text-indigo-600 focus:ring-indigo-500 rounded"
        />
        <div>
          <label htmlFor="private" className="font-medium text-lg">
            Make profile private
          </label>
          <p className="text-sm text-gray-400">
            When enabled, only approved followers can see your activity.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="data-sharing"
          checked={allowDataSharing}
          onChange={() => setAllowDataSharing(!allowDataSharing)}
          className="mt-1 h-5 w-5 text-indigo-600 focus:ring-indigo-500 rounded"
        />
        <div>
          <label htmlFor="data-sharing" className="font-medium text-lg">
            Allow data sharing
          </label>
          <p className="text-sm text-gray-400">
            Allow us to use anonymized data to improve our services.
          </p>
        </div>
      </div>
    </div>
  );
}
