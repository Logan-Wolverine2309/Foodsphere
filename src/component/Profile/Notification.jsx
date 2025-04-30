// components/NotificationPopup.js
import React, { useState } from "react";

export default function Notification() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");

  const showNotification = (text, redirectLink = "") => {
    setMessage(text);
    setLink(redirectLink);
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false); // Auto-hide after 5 sec
    }, 5000);
  };

  const handleClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <>
      {isVisible && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background: "#333",
            color: "#fff",
            padding: "20px",
            borderRadius: "8px",
            zIndex: "1000",
          }}
        >
          <p>{message}</p>
          {link && (
            <button
              onClick={handleClick}
              style={{
                marginTop: "10px",
                background: "#ff5722",
                border: "none",
                padding: "10px",
                borderRadius: "5px",
                color: "white",
              }}
            >
              View Offer
            </button>
          )}
        </div>
      )}

      {/* DEMO BUTTONS */}
      <div style={{ padding: 20 }}>
        <button
          onClick={() => showNotification("Your order is out for delivery!")}
        >
          Simulate Delivery Update
        </button>
        <button
          onClick={() =>
            showNotification(
              "50% off on Indian Fast Food!",
              "/restaurant/indian-fast-food"
            )
          }
        >
          Simulate Offer Update
        </button>
      </div>
    </>
  );
}
