import React from 'react'

export default function OrderOverview(props) {
  return (
    <div className='sm:mt-20 mt-8 text-custom_gray'>
        <div className='flex'>
        <div className='sm:mb-12 mb-7 sm:ml-60 ml-5 font-bold sm:text-2xl text-xl italic '>Order Details</div>
        </div>

        <div className='flex justify-center  sm:space-x-8 space-x-2 items-center'>
            <img src="/img/carrot.png" alt="" className='sm:w-20 w-16  sm:h-20 h-16'/>
            <div>
                <div className='font-medium sm:text-2xl text-md font-serif pb-2'>Carrots - 50Kg</div>
                <div className='italic text-gray-500 sm:text-sm text-xs'>{props.orderReference}</div>
            </div>           
        </div>

        <div>
            <div className=' flex sm:flex-row flex-col justify-center sm:space-x-24 sm:mt-16 mt-8 '>
                
            <div className='group basis-1/4 sm:p-6 p-3 bg-gray-200 border shadow-primary rounded-lg shadow hover:bg-primary  transition duration-400 ease-out hover:shadow-black sm:mb-0 mb-4'>
                <div className='mb-2 sm:text-2xl text-xl font-bold  text-primary group-hover:text-white text-center'>Customer Details</div>
                <div className=' text-gray-800 group-hover:text-white sm:space-y-3 space-y-2 p-1 ml-3 text-center'>
                <div>AK Prasanna</div>
                <div className='italic sm:text-sm text-xs'>23/4 ,ggya, Matara</div>
                <div  className='text-gray-800 font-semibold sm:text-md text-sm'>071-7345867</div>
                </div>
            </div>

            <div className='group basis-1/4 sm:p-6 p-3 bg-gray-200 border  shadow-primary rounded-lg shadow hover:bg-primary  transition duration-300 ease-out hover:shadow-black '>
                <div className='mb-2 sm:text-2xl text-xl font-bold  text-primary group-hover:text-white text-center'>{props.title}</div>
                <div className=' text-gray-800 group-hover:text-white sm:space-y-3 space-y-2 p-1 ml-3 text-center'>
                <div>AK Prasanna</div>
                <div className='italic sm:text-sm text-xs'>23/4 ,ggya, Matara</div>
                <div  className='text-gray-800 font-semibold sm:text-md text-sm'>071-7345867</div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}