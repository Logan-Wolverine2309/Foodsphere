import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Notification Component
const Notification = ({ message, type = 'info', duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [message, duration, onClose]);

  if (!visible) return null;

  const typeStyles = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-blue-600',
    warning: 'bg-yellow-600 text-black',
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-5 right-5 px-6 py-4 rounded-lg shadow-lg text-white text-sm font-medium z-[1000] ${typeStyles[type] || typeStyles.info}`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const NotificationDemo = () => {
  const [notification, setNotification] = useState({ message: '', type: '' });

  // Automatically show notifications after page load
  useEffect(() => {
    setTimeout(() => {
      setNotification({ message: 'Page Loaded Successfully!', type: 'info' });
    }, 1000);

    setTimeout(() => {
      setNotification({ message: 'Action completed successfully!', type: 'success' });
    }, 3000);

    setTimeout(() => {
      setNotification({ message: 'Something went wrong!', type: 'error' });
    }, 5000);

    setTimeout(() => {
      setNotification({ message: 'This is a warning message!', type: 'warning' });
    }, 7000);
  }, []);

  const triggerNotification = (type) => {
    const messages = {
      success: 'Action completed successfully!',
      error: 'Something went wrong!',
      info: 'Here is some information.',
      warning: 'This is a warning message.',
    };
    setNotification({ message: messages[type], type });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white gap-4">
      <h1 className="text-2xl font-bold">Real-Time Notification Demo</h1>
      
      <div className="flex gap-4">
        <button
          onClick={() => triggerNotification('success')}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
        >
          Trigger Success
        </button>
        <button
          onClick={() => triggerNotification('error')}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Trigger Error
        </button>
        <button
          onClick={() => triggerNotification('info')}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          Trigger Info
        </button>
        <button
          onClick={() => triggerNotification('warning')}
          className="bg-yellow-400 text-black hover:bg-yellow-500 px-4 py-2 rounded"
        >
          Trigger Warning
        </button>
      </div>

      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: '', type: '' })}
      />
    </div>
  );
};

export default Notification;
