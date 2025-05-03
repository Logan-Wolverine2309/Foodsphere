import React, { useEffect, useState } from 'react';
import Notification from './Notification'; // Use the real-time notification from earlier

export default function Subscription() {
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [canceling, setCanceling] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  // Simulate fetching plan
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setPlan('Premium');
      setLoading(false);
    }, 1000);
  }, []);

  const cancelSubscription = () => {
    setCanceling(true);
    setTimeout(() => {
      const isSuccess = Math.random() > 0.2; // 80% success chance
      if (isSuccess) {
        setPlan('Free');
        setMessage('Subscription cancelled successfully.');
      } else {
        setError('Failed to cancel subscription. Try again.');
      }
      setCanceling(false);
    }, 1500);
  };

  return (
    <div className="space-y-4 text-white p-4 bg-gray-900 rounded max-w-sm mx-auto mt-10">
      {loading ? (
        <p className="text-gray-400">Loading subscription...</p>
      ) : (
        <>
          <p>
            Your plan: <strong>{plan}</strong>
          </p>
          {plan !== 'Free' && (
            <button
              onClick={cancelSubscription}
              disabled={canceling}
              className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 disabled:opacity-50 transition"
            >
              {canceling ? 'Cancelling...' : 'Cancel Subscription'}
            </button>
          )}
        </>
      )}

      {message && (
        <Notification message={message} type="success" onClose={() => setMessage(null)} />
      )}
      {error && (
        <Notification message={error} type="error" onClose={() => setError(null)} />
      )}
    </div>
  );
}
