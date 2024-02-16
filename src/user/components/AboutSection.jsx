import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
const AboutSection = () => {
  return (
    <div className='bg-primary px-16 py-12 flex justify-center'>
        <div className='px-16'>
            <FaShippingFast className='text-5xl text-white mx-auto' />
            <p className='mx-auto text-lg font-medium my-3 text-white'>Delivery within 24 Hours</p>
        </div>
        <div className=' border-x-2 px-16'>
            <FaShippingFast className='text-5xl text-white mx-auto' />
            <p className='mx-auto text-lg font-medium my-3 text-white'>Delivery within 24 Hours</p>
        </div>
        <div className=' px-16'>
            <BiSolidLike className='text-5xl text-white mx-auto' />
            <p className='mx-auto text-lg font-medium my-3 text-white'>Amazing Deals</p>
        </div>
    </div>
  )
}

export default AboutSection