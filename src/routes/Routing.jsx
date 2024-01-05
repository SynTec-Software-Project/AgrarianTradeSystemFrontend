import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { MyProducts, MyOrders, NewOrders, MyReviews, MyReturns, Profile } from "@/pages/SellerDashboard/dashboard";
import AddProductForm from '@/pages/SellerDashboard/dashboard/tabs/MyProduct/AddProductForm';
const Routing = () => {
  return (
    <>
    <Routes>
        <Route path='/my-products' element={<MyProducts />}>
            
        </Route>
        <Route path='/new-orders' element={<NewOrders />}>  </Route>

        <Route path='/my-orders' element={<MyOrders />}>  </Route>

        <Route path='/my-reviews' element={<MyReviews />}>  </Route>

        <Route path='/my-returns' element={<MyReturns />}>  </Route>

        <Route path='/add-products' element={<AddProductForm/>}>  </Route>
        </Routes>
    </>
  )
}

export default Routing