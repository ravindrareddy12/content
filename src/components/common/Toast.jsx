
import React from 'react';

const Toast = ({ message, onClose }) => {
  return (
    <div className="fixed top-4 right-4 w-64 bg-green-600 border border-gray-300 shadow-lg rounded-lg p-4 z-50">
      <div className="flex justify-between items-center">
        <span>{message}</span>
        {/* <button onClick={onClose} className="ml-4 text-gray-600 hover:text-gray-900">
          &times;
        </button> */}
      </div>
    </div>
  );
};

export default Toast;
