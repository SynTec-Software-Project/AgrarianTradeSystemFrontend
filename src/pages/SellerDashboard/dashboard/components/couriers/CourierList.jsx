import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Button, List, ListItem, ListItemPrefix, ListItemSuffix, Avatar, Card, Typography } from "@material-tailwind/react";

export function CourierList({ search ,orderId }) {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(false);
  const [courierList, setCourierList] = useState([]);

  const handlePopup = (id) => {
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
        handleUpdate(id);
        Swal.fire({
          title: "Selected!",
          text: "You have selected this courier.",
          icon: "success"
        });
      }
    });
  };
  
  const handleUpdate = (courierID) => {
    axios.put(`https://localhost:7144/api/NewOrder/update-courier/${orderId}?courierID=${courierID}`)
      .then(() => {
        console.log('updated');
      })
      .catch((error) => {
        console.error('Error updating courier:', error);
      });
  };

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

  useEffect(() => {
    filterData(courierList);
  }, [search, courierList]);

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
          <Card className="w-100" key={values.id}>
            <List>
              <ListItem ripple={false} className="flex items-center">
                <ListItemPrefix>
                  <Avatar variant="circular" alt="candice" src={courierImageUrl} />
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
