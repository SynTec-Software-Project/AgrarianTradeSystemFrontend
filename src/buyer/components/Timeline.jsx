import React from 'react';
import carrot from '../../../public/img/carrot.png';
import { Stepper, Step, Typography } from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

export default function MTimeline(props) {

  const [activeStep, setActiveStep] = React.useState(0);
  
  // Define the order status
  const orderStatus = "Ready to Pickup";

  React.useEffect(() => {
    // Set active step based on order status
    switch (orderStatus) {
      case "Ready to Pickup":
        setActiveStep(0);
        break;
      case "Picked Up":
        setActiveStep(1);
        break;
      case "Delivered":
        setActiveStep(2);
        break;
      default:
        setActiveStep(0);
    }
  }, [orderStatus]);


    return (
    <div className='sm:mt-10 mt-4 text-custom_gray font-popins'>
        {/* <div className='sm:mb-8 mb-7 sm:ml-60 ml-5 font-medium sm:text-2xl text-xl italic '>Order Details</div> */}
        <div className='text-center mb-8'>Your Order {props.orderReference} is <span className="text-primary">{orderStatus}</span></div>

      <div className="w-8/12 mx-auto px-24 py-4 mb-8">
        <Stepper activeStep={activeStep}>
          <Step  className={` ${activeStep === 0 ?  'border border-green-500 ' : ''}`}>
            <UserIcon className="h-5 w-5" />
            <Typography variant="h6"
              color={activeStep === 0 ? "green" : "gray"}
              className="absolute -bottom-[3rem] w-max text-center">
              Ready to Pickup
            </Typography>
          </Step>
          <Step className={` ${activeStep >= 1 ? 'border border-green-500' : ''}`}>
            <CogIcon className="h-5 w-5" />
            <Typography variant="h6"
              color={activeStep === 1 ? "green" : "gray"}
              className="absolute -bottom-[3rem] w-max text-center">
              Picked Up
            </Typography>
          </Step>
          <Step className={` ${activeStep >= 2 ? 'border border-green-500' : ''}`}>
            <BuildingLibraryIcon className="h-5 w-5" />
            <Typography variant="h6"
              color={activeStep === 2 ? "green" : "gray"}
              className="absolute -bottom-[3rem] w-max text-center">
              Delivered
            </Typography>
          </Step>
        </Stepper>
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
