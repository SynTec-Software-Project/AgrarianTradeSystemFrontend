import React from 'react';
import carrot from '../../../public/img/carrot.png';


export default function MTimeline(props) {
    
  return (
    <div className='sm:mt-10 mt-4 text-custom_gray font-popins'>
        {/* <div className='sm:mb-8 mb-7 sm:ml-60 ml-5 font-medium sm:text-2xl text-xl italic '>Order Details</div> */}
        <div className='text-center'>Your Order {props.orderReference} is <span className="text-primary">Ready to Pickup</span></div>

       <div className="flex items-center justify-center mt-14">
            <div className="flex items-center space-x-20">
                <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-primary">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="text-sm">Ready to Pickup</div>
                </div>
                <div className="border-t border-gray-300 h-0 w-20"></div>
                <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-primary">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="text-sm">Picked up</div>
                </div>
                <div className="border-t border-gray-300 h-0 w-20"></div>
                <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-primary">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="text-sm">Delivered</div>
                </div>
            </div>
        </div> 
        


        <div className="flex justify-center">
  <div className="relative w-9/12 h-full text-custom_gray bg-white shadow-md overflow-auto rounded-xl bg-clip-border mt-10 hidden sm:block">
    <table className="w-full text-left table-auto">
      <thead>
        <tr>
          <div className="pl-8 grid grid-cols-5 gap-x-6 gap-4">
            <th className="col-span-1 ml-6 pt-6 pb-4 font-bold">
              <p className="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900">
                Product
              </p>
            </th>
            <th className="col-span-1 pt-8 pb-6 font-bold">
              <p className="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900">
                Order Placed
              </p>
            </th>
            <th className="col-span-1 pt-8 pb-6 font-bold">
              <p className="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900">
                Delivery Date
              </p>
            </th>
            <th className="col-span-1 pt-8 pb-6 font-bold">
              <p className="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900">
                Quantity
              </p>
            </th>
            <th className="col-span-1 pt-8 pb-6 font-bold">
              <p className="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900">
                Status
              </p>
            </th>
          </div>
        </tr>
      </thead>

      <tbody>
        <tr>
          <div className="pl-8 pr-8 grid grid-cols-5 gap-x-6 gap-4 border-b border-blue-gray-50">
            <td className="p-3 col-span-1">
              <div className="flex space-x-5">
                <img src={carrot} alt="Carrot" />
                <p className="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                  Carrot
                </p>
              </div>
            </td>

            <td className="p-3 col-span-1">
              <p className="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                2023-02-12
              </p>
            </td>

            <td className="p-3 col-span-1">
              <p className="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                2023-02-20
              </p>
            </td>

            <td className="p-3 col-span-1">
              <p className="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 pl-3">
                50Kg
              </p>
            </td>

            <td className="p-3 col-span-1">
              <p className="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 pl-4">
                Processing
              </p>
            </td>
          </div>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div className="flex justify-end mr-36 mt-3 mb-3 text-sm">
  <div className="w-96 border rounded-xl shadow-md p-4">
    <div className="flex justify-between mb-2">
      <p className="font-bold ">Number of Items:</p>
      <p>1</p>
    </div>
    <div className="flex justify-between mb-2">
      <p className="font-bold">SubTotal:</p>
      <p>Rs. 5000</p>
    </div>
    <div className="flex justify-between mb-2">
      <p className="font-bold">Courier Charge:</p>
      <p>Rs. 1000</p>
    </div>
    <hr className="my-2 border-primary" />
    <div className="flex justify-between mt-2">
      <p className="font-bold">Total:</p>
      <p>Rs. 6000</p>
    </div>
  </div>
</div>

<div className="flex justify-center text-sm">
  <div className="relative w-9/12 h-full border rounded-xl shadow-md p-4">
    <div className="flex justify-between ml-16 mr-16">
      <div>
        <p className="font-bold">Delivery Address</p>
        <p>G.S. Perera</p>
        <p>Galle</p>
        <p>072-9878345</p>
      </div>
      <div>
        <p className="font-bold">Sold By</p>
        <p>A.K. Nalin</p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
