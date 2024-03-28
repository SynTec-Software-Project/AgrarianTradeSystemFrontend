import React from 'react'
import MainNav from './components/MainNav'
import Review from './components/Review'

const LandingPage = () => {
  return (
    <div className='bg-secondary'>
      <MainNav />
      <Review/>
    </div>
  )
}

export default LandingPage