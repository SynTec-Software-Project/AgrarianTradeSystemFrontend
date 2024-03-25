import React from 'react'
import MainNav from './components/MainNav'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import Category from './components/Category'

const LandingPage = () => {
  return (
    <div className='bg-secondary'>
      <MainNav />
      <HeroSection />
      <AboutSection />   
      <Category />
    </div>
  )
}

export default LandingPage