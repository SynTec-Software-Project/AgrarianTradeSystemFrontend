import React from 'react'
import {
  Rating,
} from "@material-tailwind/react";
import { FaLocationDot } from "react-icons/fa6";
import { FaWeight } from "react-icons/fa";
const ProductsCard = () => {
  return (
    <div>
      <div className="relative bg-white rounded-2xl dark:bg-gray-700">
        <div className="w-full h-56 px-4 pt-4">
          <img
            src="https://a-z-animals.com/media/2022/09/shutterstock_440493100-e1666516567945.jpg"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        {/* card body */}
        <div className='px-6 py-4'>
          <div className="mb-3 flex items-center justify-between">
            <Rating value={4} />
            <div>
              <p className=' text-sm text-gray-700'>Reviews (4)</p>
            </div>
          </div>
          <div className=' my-3'>
            <h1 className='text-xl font-semibold text-gray-800'>Carrot</h1>
          </div>
          <div className='flex justify-between'>
            <p className='flex items-center gap-2'><FaLocationDot />Badulla</p>
            <p className='flex items-center gap-2'><FaWeight />20 - 50kg</p>
          </div>
          <div className='flex justify-start mt-6'>
            <h1 className='text-primary text-xl'>Rs.320.00</h1>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductsCard