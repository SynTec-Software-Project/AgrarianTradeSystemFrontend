import { Rating } from '@material-tailwind/react'
import React from 'react'

const Review = () => {
  return (
    <div>
            <div className=' bg-white px-8 py-5 rounded-lg my-2'>
      <div className='flex gap-28'>
      <div className=' pr-56 border-r-2' >
      <p className='my-8'>Rating & Reviews</p>
         <div className='bg-orange-400'>
       4.5 Top Rated
       </div>
       <Rating value={4}/>
      <p> 651 Ratings</p>
      </div>
     <div>
      {[5, 4, 3, 2, 1].map((rating, index) => (
        <div key={index} className="flex items-center mt-4 w-full">
          <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">{rating} star</a>
          <div className="w-48 h-5 mx-2 bg-gray-200 rounded dark:bg-gray-700">
            <div className="h-5 bg-orange-400 rounded" style={{ width: `${(index + 1) * 17}%` }}></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{(index + 1) * 17}%</span>
        </div>
      ))}
      </div>
      </div>
      <hr className='mt-9 my-3'/>
      <div className='flex'>
            <div>
              <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" alt="" className='w-[50px] h-auto rounded-[20px] py-2 ml-1' />
            </div>
            <div className='ml-1'>
              <p>Emma Robet</p>
              <p className='text-blue-gray-400'>14 February 2023</p>
            </div>
            <div className='ml-8'>
            <Rating value={4}/>
            </div>
            <p className='ml-96 text-blue-gray-800'>2 years ago...</p>
          </div>
    </div>
    
    </div>
  )
}

export default Review