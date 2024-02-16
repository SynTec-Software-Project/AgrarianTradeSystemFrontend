import React, { useState } from "react";
import curierlistdata from '../../../../../data/couriers-list-data';
import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";

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

export function CourierList() {
  const [data, setData] = useState(curierlistdata);

  const handleButtonClick = (name) => {
    // Handle button click for the specific item (e.g., delete the item)
    console.log(`Delete ${name}`);
  };

  return (
    <div>
      {data.map((values) => {
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
      })}
    </div>
  );
}
