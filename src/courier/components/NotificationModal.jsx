import React from "react";

const NotificationModal = ({ message, onConfirm, onCancel }) => {
  //

  return (
    <div className="fixed  flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg ">
        <p className="text-black">{message}</p>{" "}
        <div className="flex space-x-4 mt-4">
          <button
            onClick={onConfirm}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Confirm
          </button>
          <button
            onClick={onCancel}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
