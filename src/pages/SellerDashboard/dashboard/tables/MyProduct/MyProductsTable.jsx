import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon, } from "@heroicons/react/24/solid";
import { HiTrash } from "react-icons/hi2";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
 
const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];
 
const TABLE_HEAD = ["Order", "Product Number", "Date Created", "Unit Price", "Stock","Total Price", "", ""];
 
const TABLE_ROWS = [
  {
    img: "https://www.jiomart.com/images/product/original/590003546/carrot-orange-500-g-product-images-o590003546-p590003546-0-202203151011.jpg?im=Resize=(1000,1000)",
    name: "Carrot",
    number:"PO-20001",
    date: "23/04/23",
    unitPrice: "300.00",
    stock: "50",
    total: "15000.00"
  },
  {
    img: "https://www.jiomart.com/images/product/original/590003546/carrot-orange-500-g-product-images-o590003546-p590003546-0-202203151011.jpg?im=Resize=(1000,1000)",
    name: "Carrot",
    number:"PO-20002",
    date: "23/04/23",
    unitPrice: "300.00",
    stock: "50",
    total: "15000.00"
  },
  {
    img: "https://www.jiomart.com/images/product/original/590003546/carrot-orange-500-g-product-images-o590003546-p590003546-0-202203151011.jpg?im=Resize=(1000,1000)",
    name: "Carrot",
    number:"PO-20003",
    date: "23/04/23",
    unitPrice: "300.00",
    stock: "50",
    total: "15000.00"
  },
 
];
const MyProductsTable = () => {
  const navigate = useNavigate();
  return (
    <div>
        
        {/* Header card */}
    <Card className="h-full w-full mt-4">
 <CardHeader floated={false} shadow={false} className="rounded-none">
   <div className="mb-8 flex items-center justify-between gap-8">
     <div>
       <Typography variant="h5" color="blue-gray">
         My Products
       </Typography>
       <Typography color="gray" className="mt-1 font-normal">
         See information about all products
       </Typography>
     </div>

     {/* Add button */}
     <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
       <Button className="flex items-center gap-3" size="md" color='green'
       onClick={()=>navigate('add-products')}
       >
        Add products
       </Button>
     </div>
   </div>

 </CardHeader>
 <CardBody className="overflow-scroll px-0">
   <table className="mt-4 w-full min-w-max table-auto text-left">
     <thead>
       <tr>
         {TABLE_HEAD.map((head) => (
           <th
             key={head}
             className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
           >
             <Typography
               variant="small"
               color="blue-gray"
               className="font-normal leading-none opacity-70"
             >
               {head}
             </Typography>
           </th>
         ))}
       </tr>
     </thead>
     <tbody>
       {TABLE_ROWS.map(
         ({ img, name,number, date, unitPrice, stock,  total }, index) => {
           const isLast = index === TABLE_ROWS.length - 1;
           const classes = isLast
             ? "p-4"
             : "p-4 border-b border-blue-gray-50";
           return (
             <tr key={number}>
               <td className={classes}>
                 <div className="flex items-center gap-3">
                   <Avatar src={img} alt={name} size="sm" />
                   <div className="flex flex-col">
                     <Typography
                       variant="small"
                       color="blue-gray"
                       className="font-normal"
                     >
                       {name}
                     </Typography>
                     {/* <Typography
                       variant="small"
                       color="blue-gray"
                       className="font-normal opacity-70"
                     >
                       {}
                     </Typography> */}
                   </div>
                 </div>
               </td>

               <td className={classes}>
                 <div className="flex flex-col">
                   <Typography
                     variant="small"
                     color="blue-gray"
                     className="font-normal"
                   >
                     {number}
                   </Typography>
                 </div>
               </td>

               <td className={classes}>
                 <Typography
                   variant="small"
                   color="blue-gray"
                   className="font-normal"
                 >
                   {date}
                 </Typography>
               </td>

               <td className={classes}>
                 <Typography
                   variant="small"
                   color="blue-gray"
                   className="font-normal"
                 >
                   {unitPrice}
                 </Typography>
               </td>

               <td className={classes}>
                 <Typography
                   variant="small"
                   color="blue-gray"
                   className="font-normal"
                 >
                   {stock}
                 </Typography>
               </td>

               <td className={classes}>
                 <Typography
                   variant="small"
                   color="blue-gray"
                   className="font-normal"
                 >
                   {total}
                 </Typography>
               </td>

              {/* edit button column */}
               <td className={classes}>
                 <Tooltip content="Edit User">
                   <IconButton variant="text">
                     <PencilIcon className="h-4 w-4" />
                   </IconButton>
                 </Tooltip>
               </td>
               <td className={classes}>
                 <Tooltip content="Delete User">
                   <IconButton variant="text" color='red'>
                   <HiTrash className="h-4 w-4" />
                   </IconButton>
                 </Tooltip>
               </td>
             </tr>
           );
         },
       )}
     </tbody>
   </table>
 </CardBody>
 <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
   <Typography variant="small" color="blue-gray" className="font-normal">
     Page 1 of 10
   </Typography>
   <div className="flex gap-2">
     <Button variant="outlined" size="sm">
       Previous
     </Button>
     <Button variant="outlined" size="sm">
       Next
     </Button>
   </div>
 </CardFooter>
</Card></div>
  )
}

export default MyProductsTable