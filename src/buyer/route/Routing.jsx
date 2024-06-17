import { MyOrders, MyReturns, MyReviews, Profile } from "@/seller/SellerDashboard/dashboard";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { AddReviewCard } from "../components/Reviews/ToReview";
import ReviewForm from "../components/reuseble/ReviewForm";
import ReturnForm from "../components/Returns/ReturnForm";
import BuyerOrderDetails from "../components/BuyerOrderDetails";
import EditReview from "../components/Reviews/EditReview";
import MyReviewsPage from "../pages/MyReviews";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="my-reviews" element={<MyReviewsPage />}>
          <Route index element={<AddReviewCard />} />
          <Route path="to-review" element={<AddReviewCard />} />
          <Route path="history" element={<MyReviews />} />
        </Route>
        <Route path="history" element={<History />} />
        <Route path="/my-returns" element={<MyReturns />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-review/:id" element={<ReviewForm />} />
        <Route path="/return" element={<ReturnForm />} />
        <Route
          path="my-orders/:orderID"
          element={<BuyerOrderDetails />}
        ></Route>
        <Route path="/review/edit/:reviewId/:id" element={<EditReview />} />
        {/* <Route path='/edit' element={<HistoryForm/>} /> */}
      </Routes>
    </>
  );
};
export default Routing;
