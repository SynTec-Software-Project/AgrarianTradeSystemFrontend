import React, { useEffect, useState } from 'react';  // JavaScript library for building user interfaces
import { Card, CardBody, Typography, Button } from '@material-tailwind/react';  // Material UI components for styling
import Swal from "sweetalert2";  // Library for displaying beautiful alerts
import { Pickup_Drop_Detail } from './Pickup_Drop_Detail';  
import { useNavigate, useParams } from 'react-router-dom'; // React Router hooks for navigation
import axios from 'axios';  
import { getCourierOrderDetails } from '@/services/orderServices';

const OrderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]); 

  useEffect(() => {
    const fetchCourierOrderDetails = async () => {
      console.log(id)
      try {
        const data = await getCourierOrderDetails(id);
        console.log(data)
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourierOrderDetails();
  }, []);

  // Function to display a confirmation popup for accepting an order
  const popupAccept = () => {
    // Display a confirmation dialog using SweetAlert2
    Swal.fire({
      title: "Are you sure?",
      text: "Do you accept this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Accept it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // If user confirms, update order status to 'ready to pickup' and perform necessary actions
        handleUpdateStatus(id, 'ready to pickup');
        Swal.fire({
          title: "Accepted!",
          text: "You have accepted this order.",
          icon: "success"
        });
        handleAccept();
        // Navigate back to the previous page
        navigate(-1);
      }
    });
  };

  // Function to display a confirmation popup for rejecting an order
  const popupReject = () => {
    // Display a confirmation dialog using SweetAlert2
    Swal.fire({
      title: "Are you sure?",
      text: "Do you reject this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, reject it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // If user confirms, update order status to 'new' and perform necessary actions
        handleUpdateStatus(id, 'new');
        Swal.fire({
          title: "Rejected!",
          text: "You have rejected this courier.",
          icon: "success"
        });
        handleReject();
        // Navigate back to the previous page
        navigate(-1);
      }
    });
  };

  // Function to update order status in the database
  const handleUpdateStatus = (orderID, newStatus) => {
    axios.put(
      `https://localhost:7144/api/Order/${orderID}?orderStatus=${newStatus}`,
      { orderStatus: newStatus }
    )
    .then((response) => {
      console.log("Order status updated successfully:", response.data);
    })
    .catch((error) => {
      console.error("Error updating order status:", error);
      // Handle errors appropriately
    });
  };

  // Function to handle accepting an order
  const handleAccept = async () => {
    try {
      // Prepare HTML content for email
      const htmlContent = `
        <h2>Hello,</h2>
        <p>This is a predefined email message with <strong>HTML content</strong>.</p>
        <p>Sincerely,<br/>Your Name</p>
      `;

      // Send email using API endpoint
      const response = await axios.post("https://localhost:7144/api/Email", {
        To: "bhmmpmgunathilake1999@gmail.com",
        Subject: "Agrarian Trade System",
        Body: htmlContent,
      });
    } catch (error) {
    }
    console.log("Accepted");
  };

  // Function to handle rejecting an order
  const handleReject = async () => {
    try {
      // Prepare HTML content for email
      const htmlContent = `
        <h2>Hello,</h2>
        <p>This is a predefined email message with <strong>HTML content</strong>.</p>
        <p>Sincerely,<br/>Your Name</p>
      `;

      // Send email using API endpoint
      const response = await axios.post("https://localhost:7144/api/Email", {
        To: "bhmmpmgunathilake1999@gmail.co",
        Subject: "Agrarian Trade System",
        Body: htmlContent,
      });
    } catch (error) {
    }
    console.log("Rejected");
  };

  // If data is not yet available, display loading message
  if (!data) {
    return <div>Loading...</div>;
  }

  // Once data is available, render order details
  return (
    <div className="flex justify-center">
      <table className="w-full max-w-[50em] flex-row">
        {/* Display product details */}
        <tr style={{ height: '50px' }}>
          <th className='p-2'>
            <Card className="w-full max-w-[50rem] flex-row">
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: '40px' }}>
                <img src={`https://syntecblobstorage.blob.core.windows.net/products/${data.productImageUrl}`} alt={data.productTitle} style={{ borderRadius: "100%", height: "100px", width: "100px", marginRight: "8px" }} />
              </div>
              <CardBody style={{ marginLeft: '90px', marginTop: '15px' }}>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Product: {data.productTitle}
                </Typography>
                <div className="flex-col items-center">
                  <>
                    <Typography color="black" className="mb-2 font-normal">
                      <strong>Delivery Date</strong>&nbsp;:&nbsp;<span style={{ color: 'gray' }}>before</span> <strong>{data.deliveryDate}</strong>
                    </Typography>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      Delivery Fee : {data.deliveryFee}
                    </Typography>
                  </>
                </div>
              </CardBody>
            </Card>
          </th>
        </tr>

        {/* Display pickup details */}
        <tr>
          <td className='p-2 mb-5'>
            <Pickup_Drop_Detail
              type="pickup"
              name={data.farmerFName + " " + data.farmerLName}
              address={data.farmerAddL1 + ", " + data.farmerAddL2 + ", " + data.farmerAddL3}
              phoneNumber={data.farmerPhoneNumber}
            />
            <br />
          </td>
        </tr>

        {/* Display drop details */}
        <tr>
          <td className='p-2'>
            <Pickup_Drop_Detail
              type="drop"
              name={data.customerFName + " " + data.customerLName}
              address={data.customerAddL1 + " " + data.customerAddL2 + " " + data.customerAddL3}
              phoneNumber={data.customerPhoneNumber}
            />
          </td>
        </tr>

        {/* Display buttons for accepting/rejecting the order */}
        <tr>
          <td colSpan="2" className='p-2'>
            <Card className="mt-10 w-full max-w-[50rem] flex-row">
              <CardBody className="w-full max-w-[50rem] flex-row">
                <div className="flex w-full max-w-[50rem] gap-4 justify-center items-center">
                  <div className="flex w-max gap-4">
                    {/* Button to accept the order */}
                    <Button color="green" onClick={popupAccept}>Accept Order</Button>
                    {/* Button to reject the order */}
                    <Button color="red" onClick={popupReject}>Reject Order</Button>
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

export default OrderDetail
