import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderOverview from "@/buyer/components/OrderOverview";
import {
  fetchCourierDetails,
  updateOrderStatus,
} from "@/services/orderServices";
import {
  onOrderStatusUpdate,
  sendOrderStatusConfirmation,
} from "@/services/signalRService";
import NotificationModal from "./NotificationModal";

export default function CourierOrderDetails({ currentUser }) {
  const { orderID } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    fetchCourierDetails(orderID)
      .then((data) => {
        setOrderDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching courier details:", error);
      });

    onOrderStatusUpdate((message) => {
      setNotification(message);
    });
  }, [orderID]);

  const handleUpdateStatus = async (orderID, newStatus) => {
    try {
      const response = await updateOrderStatus(orderID, newStatus);
      console.log("Order status updated successfully:", response);

      // Determine if notification should be sent to buyer or farmer
      let recipientId;
      if (newStatus === "Picked Up" && currentUser.id === orderDetails.userId) {
        recipientId = orderDetails.farmerId; // Notify farmer
      } else if (
        newStatus === "Delivered" &&
        currentUser.id !== orderDetails.userId
      ) {
        recipientId = orderDetails.userId; // Notify buyer
      }

      // Send notification to the recipient
      if (recipientId) {
        await sendOrderStatusConfirmation(recipientId, newStatus);
        console.log(
          `Notification sent to user ${recipientId} for status ${newStatus}`
        );
      }

      // Show modal only if confirmation is required (buyer or farmer)
      if (
        (newStatus === "Picked Up" && currentUser.id === orderDetails.userId) ||
        (newStatus === "Delivered" && currentUser.id !== orderDetails.userId)
      ) {
        setShowConfirmation(true);
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const handleConfirmation = async (isConfirmed) => {
    setShowConfirmation(false); // Close modal after confirmation

    if (isConfirmed) {
      try {
        const response = await confirmUpdateOrderStatus(
          orderDetails.orderID,
          orderDetails.orderStatus
        );
        console.log("Order status confirmed:", response);
      } catch (error) {
        console.error("Error confirming order status:", error);
      }
    } else {
      console.log("Confirmation declined");
    }
  };
  const handleUpdateButtonClick = () => {
    console.log("UPDATE ORDER STATUS button clicked");
    handleUpdateStatus(orderID, orderDetails.orderStatus.toLowerCase());
  };

  return (
    <div>
      {orderDetails && ( // Render OrderOverview only when orderDetails is available
        <div className="sm:-mt-12 -mt-4">
          <OrderOverview orderDetails={orderDetails} type="Courier" />
        </div>
      )}

      {orderDetails && ( // Render order status text only when orderDetails is available
        <p className="text-sm text-red-300 flex justify-center sm:pt-10 pt-6 overline uppercase font-sans">
          The order has been {orderDetails.orderStatus}
        </p>
      )}

      {orderDetails && // Render "UPDATE ORDER STATUS" button conditionally
        (orderDetails.orderStatus.toLowerCase() === "ready to pickup" ||
          orderDetails.orderStatus.toLowerCase() === "picked up") && (
          <div className="flex flex-row sm:space-x-16 space-x-4 justify-center sm:pt-8 pt-6">
            <div className="bg-gray-200 shadow-md h-10 w-32 rounded-lg flex items-center justify-center font-medium text-gray-800">
              {orderDetails.orderStatus.toLowerCase() === "ready to pickup"
                ? "Picked Up"
                : "Delivered"}
            </div>
            <button
              className="bg-primary text-sm shadow-lg h-10 w-48 rounded-lg flex items-center justify-center font-medium text-white focus:ring-2 focus:ring-primary focus:text-primary focus:bg-gray-200 transition duration-300 ease-out hover:bg-green-400"
              onClick={handleUpdateButtonClick}
            >
              UPDATE ORDER STATUS
            </button>
          </div>
        )}

      {showConfirmation && (
        <NotificationModal
          message={
            "Your order status has been updated to ${orderDetails.orderStatus}"
          }
          onConfirm={() => handleConfirmation(true)}
          onCancel={() => handleConfirmation(false)}
        />
      )}

      {notification && <div className="notification">{notification}</div>}
    </div>
  );
}
