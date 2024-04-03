import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  MyProducts,
  MyOrders,
  NewOrders,
  MyReviews,
  MyReturns,
  Profile,
} from "@/pages/SellerDashboard/dashboard";
import SelectCourier from "@/pages/SellerDashboard/dashboard/components/SelectCourier";
import OrderDetails from "@/pages/SellerDashboard/dashboard/components/OrderDetails";
import AddProducts from "@/pages/SellerDashboard/dashboard/AddProducts";
import UpdateProduct from "@/pages/SellerDashboard/dashboard/UpdateProduct";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/my-products" element={<MyProducts />}></Route>

        <Route path="/new-orders" element={<NewOrders />}>
          {" "}
        </Route>

        <Route path="/my-orders" element={<MyOrders />}>
          {" "}
        </Route>

        <Route path="/my-reviews" element={<MyReviews />}>
          {" "}
        </Route>

        <Route path="/my-returns" element={<MyReturns />}>
          {" "}
        </Route>

        <Route path="/select-courier" element={<SelectCourier />}>
          {" "}
        </Route>

        <Route path="/add-products" element={<AddProducts />}>
          {" "}
        </Route>

        <Route path="my-orders/:orderID" element={<OrderDetails />}></Route>

        <Route path="/update-product/:id" element={<UpdateProduct />}></Route>
      </Routes>
    </>
  );
};

export default Routing;
