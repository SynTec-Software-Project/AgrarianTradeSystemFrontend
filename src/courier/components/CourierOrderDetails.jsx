import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderOverview from "@/buyer/components/OrderOverview";
import {
  fetchCourierDetails,
  updateOrderStatus,
} from "@/services/orderServices";
import NotificationModal from "./NotificationModal";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

export default function CourierOrderDetails({ currentUser }) {
  const { orderID } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [notification, setNotification] = useState("");
  const [connection, setConnection] = useState(null);
  const [showComponent, setShowComponent] = useState(false); // State variable to track button click

  useEffect(() => {
    fetchCourierDetails(orderID)
      .then((data) => {
        setOrderDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching courier details:", error);
      });
  }, [orderID]);

  useEffect(() => {
    const connectToHub = async () => {
      const newConnection = new HubConnectionBuilder()
        .withUrl("https://localhost:7144/notificationhub")
        .withAutomaticReconnect()
        .build();

      newConnection.on("ReceiveMessage", (message) => {
        setNotification(message);
        console.log(message);
      });

      try {
        await newConnection.start();
        console.log("Connected to SignalR hub");
        setConnection(newConnection);
      } catch (error) {
        console.error("Error connecting to SignalR hub:", error);
      }
    };

    if (!connection) {
      connectToHub();
    }
  }, [connection]);

  const handleButtonClick = async () => {
    if (connection && orderDetails) {
      const notification = {
        OrderID: orderDetails.orderID,
        OrderStatus: orderDetails.orderStatus,
        FarmerID: orderDetails.farmerID,
        FarmerFName: orderDetails.farmerFName,
        FarmerLName: orderDetails.farmerLName,
        BuyerID: orderDetails.buyerID,
        CustomerFName: orderDetails.customerFName,
        CustomerLName: orderDetails.customerLName,
      };
      console.log(orderDetails);
      try {
        await connection.send("SendNotification", notification);
        console.log("Notification sent");
        setShowConfirmation(true);
        // Determine recipient based on order status
        if (orderDetails.orderStatus.toLowerCase() === "ready to pickup") {
          setShowConfirmation(true); // Show confirmation modal for farmer
          console.log("Notify farmer directly if required");
        } else if (orderDetails.orderStatus.toLowerCase() === "picked up") {
          // Handle logic to notify buyer directly (if needed)
          console.log("Notify buyer directly if required");
        }
      } catch (error) {
        console.error("Error sending notification:", error);
      }
    }
  };

  const handleConfirmation = async (confirm) => {
    if (confirm && orderDetails) {
      try {
        const updatedOrder = await updateOrderStatus(orderDetails.orderID, {
          status: "picked up",
        });
        setOrderDetails(updatedOrder);
        console.log("Order status updated");
      } catch (error) {
        console.error("Error updating order status:", error);
      }
    }
    setShowConfirmation(false);
  };

  return (
    <div>
      {orderDetails && (
        <div className="sm:-mt-12 -mt-4">
          <OrderOverview orderDetails={orderDetails} type="Courier" />
        </div>
      )}
      {orderDetails && (
        <p className="text-sm text-red-300 flex justify-center sm:pt-10 pt-6 overline uppercase font-sans">
          The order has been {orderDetails.orderStatus}
        </p>
      )}
      {orderDetails &&
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
              onClick={handleButtonClick}
            >
              UPDATE ORDER STATUS
            </button>
          </div>
        )}
      {/* {showConfirmation && (
        <NotificationModal
          message={notification}
          onConfirm={() => handleConfirmation(true)}
          onCancel={() => handleConfirmation(false)}
        />
      )} */}
      {notification && <div className="notification">{notification}</div>}
    </div>
  );
}
