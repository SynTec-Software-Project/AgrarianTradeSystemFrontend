import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { MyProducts, MyOrders, NewOrders, MyReviews, MyReturns, Profile } from "@/pages/SellerDashboard/dashboard";
import AddProductForm from '@/pages/SellerDashboard/dashboard/forms/AddProductForm';


import OrderDetails from '@/pages/SellerDashboard/dashboard/components/OrderDetails';
import ReturnProductDetails from '@/pages/SellerDashboard/dashboard/components/reviews/ReturnProductDetails';
import ReviewDetails from '@/pages/SellerDashboard/dashboard/components/reviews/ReviewDetails';
import ReturnOrder from '@/pages/SellerDashboard/dashboard/ReturnOrder';
import ReviewForm from '@/buyer/components/reuseble/ReviewForm';
import Review from '@/pages/SellerDashboard/dashboard/Review';

const Routing = () => {
  return (
    <>
    <Routes>
        <Route path='/my-products' element={<MyProducts />}></Route> 
        
        <Route path='/new-orders' element={<NewOrders />}>  </Route>

        <Route path='/my-orders' element={<MyOrders />}>  </Route>

        <Route path='/my-reviews' element={<MyReviews />}>  </Route>

        <Route path='/my-reviews/review' element={<Review />}>  </Route>

        <Route path='/my-returns' element={<MyReturns />}>  </Route>

        <Route path='/my-returns/return/:id' element={<ReturnOrder />}>  </Route>

        <Route path='/add-products' element={<AddProductForm/>}>  </Route>

        <Route path='my-orders/:orderReference' element={<OrderDetails/>}></Route>

        <Route path='my-returns/return-details' element={<ReturnProductDetails/>}></Route>

        <Route path='my-reviews/review-details' element={<ReviewDetails/>}></Route>

        <Route path='returns/:id' element={<ReturnOrder/>}></Route>

        </Routes>
    </>
  )
}

export default Routing