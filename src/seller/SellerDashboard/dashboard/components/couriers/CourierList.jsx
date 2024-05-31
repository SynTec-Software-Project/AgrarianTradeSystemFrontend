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

const handlePopup =()=>{
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
      Swal.fire({
        title: "Selected!",
        text: "You have selected this courier.",
        icon: "success"
      });
    }
  });
}

export function CourierList({ search }) {
  const [data, setData] = useState([]);

  const handleButtonClick = (name) => {
    // Handle button click for the specific item (e.g., delete the item)
    console.log(`Delete ${name}`);
  };

  const filterData = (curierlistdata) => {
    if (search) {
      const filteredCouriers = curierlistdata.filter(data =>
        data.name.toLowerCase().includes(search.toLowerCase()) || 
        data.detail.toLowerCase().includes(search.toLowerCase())
      );
      setData(filteredCouriers);
    } else {
      setData(curierlistdata);
    }
  }

  useEffect(() => {
    filterData(courierList);
  }, [search])

  const [courierList,setcourierList]=useState([])

  useEffect(() => {
  

    axios.get("https://localhost:7294/api/CourierList")
        .then((response) => {

          console.log("HEllo")
          
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
        const { name, detail, image } = values;
        return (
          <Card className="w-100" key={values.id}>
            <List>
              <ListItem ripple={false} className="flex items-center">
                <ListItemPrefix>
                  <Avatar variant="circular" alt="candice" src={image} />
                </ListItemPrefix>
                <div className="flex flex-col ml-4">
                  <Typography variant="h6" color="blue-gray">
                    {name}
                  </Typography>
                  <Typography variant="small" color="gray" className="font-normal">
                    {detail}
                  </Typography>
                </div>
                <ListItemSuffix>
                  <Button
                    variant="gradient"
                    className="ml-auto"
                    onClick={handlePopup}
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