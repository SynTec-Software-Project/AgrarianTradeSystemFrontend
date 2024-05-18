import OrderOverview from "@/buyer/components/OrderOverview";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

export default function OrderDetails() {
  const { orderID } = useParams();
  const location = useLocation();
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`https://localhost:7144/api/Order/farmer/details/${orderID}`)
      .then((response) => {
        setOrderDetails(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching order details:", error);
        // Handle errors appropriately
      });
  }, [orderDetails]); // Only run the effect when orderID changes

  return (
    <div>
      {/* <OrderOverview title="Courier details" orderReference={orderReference}/> */}
      {/* <OrderOverview title="Courier details" orderID={orderID} /> */}
      <OrderOverview orderDetails={orderDetails} type="Farmer" />
    </div>
  );
}
