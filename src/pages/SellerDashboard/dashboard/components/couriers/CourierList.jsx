import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Button, List, ListItem, ListItemPrefix, ListItemSuffix, Avatar, Card, Typography } from "@material-tailwind/react";

export function CourierList({ search, orderId }) {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(false);
  const [courierList, setCourierList] = useState([]);

  // Function to handle popup confirmation for selecting a courier
  const handlePopup = (courierId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you need this courier service?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, select it!"
    }).then((result) => {
      if (result.isConfirmed) {
        setSelected(true);
        handleUpdateCourier(courierId);
        handleUpdateStatus(orderId ,'pending'); // Update order status to pending
        Swal.fire({
          title: "Selected!",
          text: "You have selected this courier.",
          icon: "success"
        });
        sendPredefinedEmail(); // Send predefined email
      }
    });
  };

  // Function to update order status
  const handleUpdateStatus = (orderID, newStatus) => {
    axios
      .put(
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

  // Function to send predefined email
  const sendPredefinedEmail = async () => {
    try {
      const htmlContent = `
        <h2>Hello Courier</h2>
        <p>This is a trial email.</p>
        <p>Sincerely,<br/>Your Name</p>
      `;

      const response = await axios.post("https://localhost:7144/api/Email", {
        To: "bhmmpmgunathilake1999@gmail.com", //buyers email
        Subject: "Agrarian Trade System",
        Body: htmlContent,
      });
      //alert(response.data);
    } catch (error) {
      alert("Error sending email: " + error.response.data);
    }
  };
  
  // Function to handle updating the selected courier
  const handleUpdateCourier = (courierID) => {
    axios.put(`https://localhost:7144/api/NewOrder/update-courier/${orderId}?courierID=${courierID}`)
      .then(() => {
        console.log('updated');
      })
      .catch((error) => {
        console.error('Error updating courier:', error);
      });
  };

  // Function to filter courier data based on search query
  const filterData = (courierListData) => {
    if (search) {
      const filteredCouriers = courierListData.filter(data =>
        data.addressLine1.toLowerCase().includes(search.toLowerCase()) || 
        data.addressLine2.toLowerCase().includes(search.toLowerCase()) ||
        data.addressLine3.toLowerCase().includes(search.toLowerCase()) ||
        data.courierFName.toLowerCase().includes(search.toLowerCase())
      );
      setData(filteredCouriers);
    } else {
      setData(courierListData);
    }
  };

  // useEffect to filter data based on search and courier list
  useEffect(() => {
    filterData(courierList);
  }, [search, courierList]);

  // useEffect to fetch courier list from API
  useEffect(() => {
    axios.get("https://localhost:7144/api/NewOrder/getcouriers")
      .then((response) => {
        setCourierList(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching couriers:', error);
      });
  }, []);

  return (  
    <div>
      {data ? data.map((values) => {
        const { courierFName, courierLName, addressLine1, addressLine2, addressLine3, courierImageUrl, courierID } = values;
        return (
          <Card className="w-100" key={courierID}>
            <List>
              <ListItem ripple={false} className="flex items-center">
                <ListItemPrefix>
                  <Avatar variant="circular" alt="courier" src={courierImageUrl} />
                </ListItemPrefix>
                <div className="flex flex-col ml-4">
                  <Typography variant="h6" color="blue-gray">
                    {courierFName +' '+courierLName}
                  </Typography>
                  <Typography variant="small" color="gray" className="font-normal">
                    {'No:' +addressLine1+', '+addressLine2 +', '+addressLine3}
                  </Typography>
                </div>
                <ListItemSuffix>
                  <Button
                    disabled={selected}
                    variant="gradient"
                    className="ml-auto"
                    onClick={() => handlePopup(courierID)}
                  >
                    Select
                  </Button>
                </ListItemSuffix>
              </ListItem>
            </List>
          </Card>
        );
      }) : "Loading..."}
    </div>
  );
}
