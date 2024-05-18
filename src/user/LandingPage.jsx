import React from 'react'
import MainNav from './components/MainNav'
import AboutSection from './components/AboutSection'
import Hero from './components/Hero'
const LandingPage = () => {
  return (
    <div className='bg-secondary'>
      <MainNav />
      <Hero/>
      <AboutSection />   
    </div>
  )
}
export default LandingPage