import React from 'react'
import Swal from 'sweetalert2';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { CourierList } from './couriers/CourierList';



  
  

function SelectCourier() {
  return (
    <>
  <div className='grid grid-cols-2 gap-4'>
  <div className="col-span-1 flex">
    <Card className="mt-6 w-full border border-gray-200 rounded-lg overflow-hidden flex-1">
      <CardBody className="p-6">
        <Typography variant="h5" color="blue-gray" className="mb-4 font-bold text-xl">
          Order Details
        </Typography>

        <div className="mb-4">
          <div className="flex items-center mb-3">
            <p className="text-gray-600 mr-2">Order Item:</p>
            <p className="text-lg font-semibold">Carrot</p>
          </div>

          <div className="flex items-center mb-3">
            <p className="text-gray-600 mr-2">Quantity:</p>
            <p className="text-lg font-semibold">25.00 Kg</p>
          </div>

          <div className="flex items-center mb-3">
            <p className="text-gray-600 mr-2">Sub Total:</p>
            <p className="text-lg font-semibold">Rs.25000.00</p>
          </div>

          <div className="flex items-center">
            <p className="text-gray-600 mr-2">Delivery Fee:</p>
            <p className="text-lg font-semibold">Rs.350.00</p>
          </div>
        </div>
      </CardBody>
    </Card>
  </div>

  <div className="col-span-1 flex">
    <Card className="mt-6 w-full border border-gray-200 rounded-lg overflow-hidden flex-1">
      <CardBody className="p-6">
        <Typography variant="h5" color="blue-gray" className="mb-2 font-bold text-xl">
          Customer Details
        </Typography>

        <div className="mb-4">
          <Typography className="font-bold mb-2">
            Delivery Address:
          </Typography>
          <address className="text-gray-700">
            48/2,<br />
            Eppawala,<br />
            Anuradhapura
          </address>
        </div>
      </CardBody>
    </Card>
  </div>
</div>


<div class="mt-10 overflow-y-auto max-h-screen">
  <CourierList/>
</div>



  </> 
    
    
  )
}

export default SelectCourier
