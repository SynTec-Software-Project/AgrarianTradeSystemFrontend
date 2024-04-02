import React, { useEffect, useState } from "react";
import curierlistdata from '../../../../../data/couriers-list-data';
import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";
import axios from "axios";

import {
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";


export function CourierList({ search ,orderId }) {
  const [data, setData] = useState([]);
  const [selected,setSelected] = useState(false);

  const handlePopup =(id)=>{
    console.log(id)
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
        handleUpdate(id)
        console.log('courier'+id)
        Swal.fire({
          title: "Selected!",
          text: "You have selected this courier.",
          icon: "success"
        });
      }
    });
  }
  
  const handleButtonClick = (name) => {
    // Handle button click for the specific item (e.g., delete the item)
    console.log(`Delete ${name}`);
  };

  const filterData = (curierlistdata) => {
    if (search) {
      const filteredCouriers = curierlistdata.filter(data =>
        data.addressLine1.toLowerCase().includes(search.toLowerCase()) || 
        data.addressLine2.toLowerCase().includes(search.toLowerCase())||
        data.addressLine3.toLowerCase().includes(search.toLowerCase()) ||
        data.courierFName.toLowerCase().includes(search.toLowerCase()) 
      );
      setData(filteredCouriers);
    } else {
      setData(curierlistdata);
    }
  }
  function handleUpdate(courierID){
    axios.put(`https://localhost:7144/api/NewOrder/update-courier/${orderId}?courierID=${courierID}`)
    .then(()=>{
      console.log('updated');
    })
  }

  useEffect(() => {
    filterData(courierList);
  }, [search])

  const [courierList,setcourierList]=useState([])

  useEffect(() => {
    axios.get("https://localhost:7144/api/NewOrder/getcouriers")
        .then((response) => { 
          setcourierList(response.data);
          setData(response.data);
           
            console.log(response.data);
        })
        .catch((error) => {
            console.error('Error fetching appointments:', error);
        });
  

}, []);

  return (  
    <div>
      {data ? data.map((values) => {
        const { courierFName,courierLName, addressLine1,addressLine2,addressLine3,courierImageUrl ,courierID } = values;
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
                    onClick={()=>handlePopup(courierID)}
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
