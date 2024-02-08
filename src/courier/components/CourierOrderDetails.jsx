import React from 'react'
import OrderOverview from '@/components/OrderOverview';
import { useParams ,useLocation } from 'react-router-dom'


export default function CourierOrderDetails(props) {

  const {orderReference}=useParams();
  const location = useLocation();
  

  return (
    <div>
      <div className='sm:-mt-12 -mt-4'>
      <OrderOverview title="Seller details" orderReference={orderReference}/>
      </div>

      {location.state !== 'delivered' && (
        <div className='flex flex-row sm:space-x-16 space-x-4 justify-center sm:pt-20 pt-6'>
          <div className='bg-gray-200 shadow-md h-10 w-32 rounded-lg flex items-center justify-center font-medium text-gray-800'>
            {location.state === 'readytopickup' ? 'Picked up' : 'Delivered'}
          </div>
          <button
            className='bg-primary shadow-lg h-10 w-48 rounded-lg flex items-center justify-center font-medium text-white focus:ring-2 focus:ring-primary focus:bg-white focus:text-primary focus:bg-gray-200 transition duration-300 ease-out hover:bg-green-400'
            onClick={() => {
              // Handle updating tracking status 
            }}
          >
            Update tracking status
          </button>
        </div>
      )}

    </div>
    

  );
}