import React, { useEffect, useState } from 'react';
import { Card, CardBody, Typography, Button } from '@material-tailwind/react';
import Swal from "sweetalert2";
import { Pickup_Drop_Detail } from './Pickup_Drop_Detail';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OrderDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://localhost:7144/api/Order/courier/details/${id}`)
      .then((response) => {
        setData(response.data[0]);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.error('Error fetching appointments:', error);
      });
  }, [id]);

  const popupAccept = () => {
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
        Swal.fire({
          title: "Accepted!",
          text: "You have accepted this order.",
          icon: "success"
        });
        handleAccept();
      }
    });
  };

  const popupReject = () => {
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
        Swal.fire({
          title: "Rejected!",
          text: "You have rejected this courier.",
          icon: "success"
        });
        handleReject();
      }
    });
  };

  const handleAccept = async () => {
    try {
      const htmlContent = `
        <h2>Hello,</h2>
        <p>This is a predefined email message with <strong>HTML content</strong>.</p>
        <p>Sincerely,<br/>Your Name</p>
      `;

      const response = await axios.post("https://localhost:7144/api/Email", {
        To: "bhmmpmgunathilake1999@gmail.com",
        Subject: "Agrarian Trade System",
        Body: htmlContent,
      });
      alert(response.data);
    } catch (error) {
      alert("Error sending email: " + error.response.data);
    }
    console.log("Accepted");
  };

  const handleReject = async () => {
    try {
      const htmlContent = `
        <h2>Hello,</h2>
        <p>This is a predefined email message with <strong>HTML content</strong>.</p>
        <p>Sincerely,<br/>Your Name</p>
      `;

      const response = await axios.post("https://localhost:7144/api/Email", {
        To: "bhmmpmgunathilake1999@gmail.co",
        Subject: "Agrarian Trade System",
        Body: htmlContent,
      });
      alert(response.data);
    } catch (error) {
      alert("Error sending email: " + error.response.data);
    }
    console.log("Rejected");
  };

  return (
    <div className="flex justify-center">
      <table className="w-full max-w-[50em] flex-row">
        <tr style={{ height: '50px' }}>
          <th className='p-2'>
            <Card className="w-full max-w-[50rem] flex-row">
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: '40px' }}>
                <img src={'https://syntecblobstorage.blob.core.windows.net/products/' + data.productImageUrl} alt={data.productTitle} style={{ borderRadius: "100%", height: "100px", width: "100px", marginRight: "8px" }} />
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

        <tr>
          <td colSpan="2" className='p-2'>
            <Card className="mt-10 w-full max-w-[50rem] flex-row">
              <CardBody className="w-full max-w-[50rem] flex-row">
                <div className="flex w-full max-w-[50rem] gap-4 justify-center items-center">
                  <div className="flex w-max gap-4">
                    <Button color="green" onClick={popupAccept}>Accept Order</Button>
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

export default OrderDetail;
