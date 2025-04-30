import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Refunds() {
  const [refundStatus, setRefundStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Call API to fetch refund status
  //   const fetchRefundStatus = async () => {
  //     try {
  //       const token = localStorage.getItem('token');
  //       const res = await axios.get('http://localhost:8080/user/refund-status', {
  //         headers: {
  //           Authorization: `Bearer ${token}`
  //         }
  //       });
  //       setRefundStatus(res.data.status);
  //       setLoading(false);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   fetchRefundStatus();
  // }, []);

  // const handleRequestRefund = async () => {
  //   try {
  //     const token = localStorage.getItem('token');
  //     await axios.post('http://localhost:8080/user/request-refund', {}, {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     });
  //     alert('Refund requested successfully!');
  //     setRefundStatus('Pending');
  //   } catch (err) {
  //     console.error(err);
  //     alert('Failed to request refund.');
  //   }
  // };

  // if (loading) return <div>Loading...</div>;

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Refund Information</h2>
      <p className="mb-4">
        Current Refund Status: <strong>{refundStatus}</strong>
      </p>

      {refundStatus === "None" && (
        <button
          onClick={handleRequestRefund}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Request Refund
        </button>
      )}

      <div className="mt-8">
        <h3 className="font-semibold mb-2">Refund Policy:</h3>
        <p>
          Refunds are available within 7 days of purchase, subject to review.
        </p>
      </div>
    </div>
  );
}
