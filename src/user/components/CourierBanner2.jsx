import React from 'react';
import CourierVector from '/img/courier.png';
import { GiMoneyStack } from "react-icons/gi";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { GiTakeMyMoney } from "react-icons/gi";

export default function CourierBanner2() {
  return (
    <div className='md:flex justify-between mx-16 px-8'>
        <div className='w-[42rem] shrink pb-7'>
          <div className=''>
            <p className='text-white font-bold text-5xl my-6'>What are you waiting for?</p>
            <p className='text-white'>If you're passionate about delivering excellence and driving innovation in logistics, 
                we invite you to explore partnership opportunities with us.
            </p>
          </div>
          <div className='flex mt-7'>
            <div className='w-28'>
              <GiMoneyStack size={35} className='m-auto  text-white'/>
              <p className='text-center text-gray-100'>No Registration Fee</p>
            </div>
            <div className='w-28 ml-9'>
              <LiaMapMarkedAltSolid size={35} className='m-auto  text-white'/>
              <p className='text-center text-gray-100'>Extensive coverage</p>
            </div>
            <div className='w-28 ml-9'>
              <GiTakeMyMoney size={35} className='m-auto text-white'/>
              <p className='text-center text-gray-100'>Grow your Business</p>
            </div>
          </div>
        </div>
        <img src={CourierVector} className='md:w-[38rem] w-full h-auto shrink'/>
    </div>
  )
}
