import React from 'react'
import { Routes,Route } from 'react-router-dom'
import MyOrders from '../pages/MyOrders'
import MyReviews from '../pages/MyReviews'
import MyReturns from '../pages/MyReturns'
import Profile from '../pages/auth/Profile'
import BuyerOrderDetails from '../components/BuyerOrderDetails'
const Routing = () => {
  return (
    <>
     <Routes>
         <Route path='/my-orders' element={<MyOrders />}/>
         <Route path='/my-reviews' element={<MyReviews />}/>
         <Route path='/my-returns' element={<MyReturns/>} />
         <Route path='/profile' element={<Profile/>} />
         <Route path='my-orders/:orderReference' element={<BuyerOrderDetails/>}></Route>
     </Routes>
    </>
  )
}

export default Routing