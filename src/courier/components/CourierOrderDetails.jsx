import OrderOverview from "@/buyer/components/OrderOverview";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { fetchCourierDetails, updateOrderStatus } from "@/services/orderServices";
export default function CourierOrderDetails() {
  const { orderID } = useParams();
  const [orderDetails, setOrderDetails] = useState([]);
  
  useEffect(() => {
    fetchCourierDetails(orderID)
      .then((data) => {
        setOrderDetails(data);
      })
      .catch((error) => {
        console.error('Error fetching courier details:', error);
      });
  }, [orderID]);

  const handleUpdateStatus = async (orderID, newStatus) => {
    try {
      const response = await updateOrderStatus(orderID, newStatus);
      console.log('Order status updated successfully:', response);
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };
  return (
    <div>
      <div className="sm:-mt-12 -mt-4">
        {/* <OrderOverview title="Seller details" orderReference={orderReference}/> */}
        <OrderOverview orderDetails={orderDetails} type="Courier" />
      </div>

      <p className="text-sm text-red-300 flex justify-center sm:pt-10 pt-6 overline uppercase font-sans  ">
        The order has been {orderDetails.orderStatus}
      </p>
      {orderDetails.orderStatus &&
        (orderDetails.orderStatus.toLowerCase() === "ready to pickup" ||
          orderDetails.orderStatus.toLowerCase() === "picked up") && ( // Conditionally render button
          <div className="flex flex-row sm:space-x-16 space-x-4 justify-center sm:pt-8 pt-6">
            <div className="bg-gray-200 shadow-md h-10 w-32 rounded-lg flex items-center justify-center font-medium text-gray-800">
              {orderDetails.orderStatus.toLowerCase() === "ready to pickup"
                ? "Picked Up"
                : "Delivered"}
            </div>
            <button
              className="bg-primary text-sm shadow-lg h-10 w-48 rounded-lg flex items-center justify-center font-medium text-white focus:ring-2 focus:ring-primary  focus:text-primary focus:bg-gray-200 transition duration-300 ease-out hover:bg-green-400"
              onClick={() => {
                // Handle updating tracking status
                handleUpdateStatus(
                  orderID,
                  orderDetails.orderStatus.toLowerCase() === "ready to pickup"
                    ? "Picked Up"
                    : "Delivered"
                );
              }}
            >
              UPDATE ORDER STATUS
            </button>
          </div>
        )}
    </div>
  );
}
