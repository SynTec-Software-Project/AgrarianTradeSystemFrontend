import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MyOrders from '../pages/MyOrders'
import MyReviews from '../pages/MyReviews'
import MyReturns from '../pages/MyReturns'
import Profile from '../pages/auth/Profile'
import { AddReviewCard } from '../components/Reviews/AddReviewCard'
import History from '../components/Reviews/History'
import ReviewForm from '../components/Reviews/ReviewForm'
import HistoryForm from '../components/Reviews/HistoryForm'
import ReturnForm from '../components/Returns/ReturnForm'
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path='/my-orders' element={<MyOrders />} />
        
        <Route path='my-reviews' element={<MyReviews />}>
          <Route index element={<AddReviewCard />} />
          <Route path='to-review' element={<AddReviewCard />} />
          <Route path='history' element={<History />} />
        </Route>
       
        <Route path='/my-returns' element={<MyReturns />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/review' element={<ReviewForm />} />
        <Route path='/edit' element={<HistoryForm/>} />
        <Route path='/return' element={<ReturnForm/>} />
      </Routes>
    </>
  )
}

export default Routing