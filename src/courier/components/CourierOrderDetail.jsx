import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Typography,
} from '@material-tailwind/react';

import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { OrderDetailPickup } from './OrderDetailPickup';
import { OrderDetailDrop } from './OrderDetailDrop';
import Swal from "sweetalert2";

const handlePopup =()=>{
  Swal.fire({
    title: "Are you sure?",
    text: "Don't you want this order?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Reject it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Rejected!",
        text: "You have rejected this order.",
        icon: "success"
      });
    }
  });
}
const handlePopup2 =()=>{
  Swal.fire({
    title: "Are you sure?",
    text: "Do you want this order?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Accept it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Accepted!",
        text: "You have accepted this order.",
        icon: "success"
      });
    }
  });
}

export function CourierOrderDetail() {
  const [pickupDate, setPickupDate] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAcceptOrder = () => {
    if (!pickupDate || !deliveryDate) {
      setErrorMessage('Please select both Pickup and Delivery dates.');
    } else {
      // Logic to handle accepting the order
      // You can perform other actions here

      // Clear the error message when both dates are selected
      handlePopup2();
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <table className="w-full max-w-[50em] flex-row">
        <tr style={{ height: '50px' }}>
          <th colSpan="2" className='p-2'>
            <Card className="w-full max-w-[50rem] flex-row">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/img/carrot.png" alt="" style={{ width: '100px', height: '100px', marginLeft: '30px' }} />
              </div>
              <CardBody className="p-6" style={{ marginLeft: '30px', marginTop: '15px' }}>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Product: Carrot - 25Kg
                </Typography>
                <div className="flex-col items-center">
                  <>
                    <Typography color="black" className="mb-2 font-normal">
                      <strong>Delivery Date</strong>&nbsp;:&nbsp;<span style={{ color: 'gray' }}>before</span> <strong>2024-05-16</strong>
                    </Typography>
                    <Typography color="black" className="mb-4 font-normal">
                      <strong>Pickup&nbsp;&nbsp;&nbsp;Date</strong>&nbsp;:&nbsp;<span style={{ color: 'gray' }}>before</span> <strong>2024-05-01</strong>
                    </Typography>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      Delivery Fee : Rs.30000.00
                    </Typography>
                  </>
                </div>
              </CardBody>
            </Card>
          </th>
        </tr>
        <tr>
          <td className='p-2'>
            {/* Pass setPickupDate to OrderDetailPickup */}
            <OrderDetailPickup setPickupDate={setPickupDate} />
            <br />
          </td>
          <td rowSpan="2" className='p-2'>
            <Card className="w-full max-w-[25rem] flex-row">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-7">Select Pickup & Delivery Date</Typography>
                <div>
                  <div className="flex w-72 flex-col items-end gap-6">
                    {/* Connect the input to setPickupDate on change */}
                    <Input
                      type="date"
                      label="Pickup Date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                    />
                    {/* Connect the input to setDeliveryDate on change */}
                    <Input
                      type="date"
                      label="Delivery Date"
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </td>
        </tr>
        <tr>
          <td className='p-2'><OrderDetailDrop /></td>
        </tr>
        <tr>
          <td colSpan="2" className='p-2'>
            <Card className="mt-10 w-full max-w-[50rem] flex-row">
              <CardBody className="w-full max-w-[50rem] flex-row">
                <div className="flex w-full max-w-[50rem] gap-4 justify-center items-center">
                  <Button color="red" onClick={handlePopup}>Reject Order</Button>
                  <Button color="green" onClick={handleAcceptOrder} >Accept Order</Button>
                </div>
                <div className='w-full max-w-[50rem] flex-row items-center text-center'>
                  <div className='block'>
                    {errorMessage && (
                      <Typography color="red" className="mt-2">
                        {errorMessage}
                      </Typography>
                    )}
                  </div>
                </div>
              </CardBody>
            </Card>
          </td>
        </tr>
      </table>
    </div>
  );
}
