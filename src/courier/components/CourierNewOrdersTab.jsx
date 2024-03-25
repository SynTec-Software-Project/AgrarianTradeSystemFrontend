"use client";
import { useState,useEffect } from 'react';
import React from 'react';
//import sellerTableData from '../../data/seller-table-data';
import { Select, Option } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function CourierNewOrdersTab() {
  const [newOrders,setnewOrders]=useState([])
  const [data, setData] = useState([]);

  //const [data, setData] = useState(sellerTableData);
  const [tab, setTab] = useState('');
  const navigate = useNavigate();

  const filterResult = (filterValue) => {
    let result;

    if (filterValue === 'all') {
      // Show all results when "All" is selected
      result = newOrders;
    } else {
      // Filter based on 'n' or 'y' for New Orders or Cancelled
      result = newOrders.filter((curData) => curData.isCancelled === filterValue);
    }
    setData(result);
  };

  useEffect(() => {
    axios.get("https://localhost:7294/api/CourierNewO")
        .then((response) => {

          console.log("HEllo")
          
            setnewOrders(response.data);
            setData(response.data);
           
            console.log(response.data);
        })
        .catch((error) => {
            console.error('Error fetching appointments:', error);
        });
  

}, []); // Ensure dependencies are included in the dependency array
  
  const clickTab = (newTab) =>{
    setTab(newTab);
  }

  const handleRowClick = (values) => {
    // Handle row click, e.g., navigate to details page
    navigate('orderlist-details')
  }
 
  return (
    <div>

<div className="float-right w-72 mb-3">
      <Select label="Order Details">
        <Option onClick={()=>{
                  filterResult('all');
                  clickTab("New Orders")
                }}  
                >All</Option>
        <Option onClick={()=>{
                  filterResult('n');
                  clickTab("New Orders")
                }}  
                  >New Orders</Option>
        <Option onClick={()=>{
                  filterResult('y');
                  clickTab("cancelled")
                }}
                >Cancelled</Option>
      </Select>
    </div>

        <div>
          <div class="relative flex flex-col w-full h-full  text-custom_gray bg-white shadow-md overflow-auto rounded-xl bg-clip-border mt-20 hidden sm:block ">
            <table class="w-full text-left table-auto min-w-max ">
              <thead>
                <tr>
                  <div class="flex flex-row justify-between border-b border-primary mr-6">
                    
                    <th class="p-4  ml-8  pt-8 pb-6 font-bold">
                    <p class="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900 ">
                      Product
                    </p>
                  </th>
                  <th class="p-4  pt-8 pb-6 font-bold">
                    <p class="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900 ">
                      Order reference 
                    </p>
                  </th>
                  <th class="p-4  pt-8 pb-6 font-bold">
                    <p class="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900 ">
                      Order Placed
                    </p>
                  </th>
                  
                  <th class="p-4  pt-8 pb-6 font-bold">
                    <p class="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900 ">
                    Quantity (Kg)
                    </p>
                  </th>
                  <th class="p-4  pt-8 pb-6 font-bold">
                    <p class="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900 ">
                      Total
                    </p>
                  </th>
                  <th class="p-4  pt-8 pb-6 font-bold">
                    <p class="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900 ">
                      Delivery Fee
                    </p>
                  </th>
                  </div>
                </tr>
              </thead>
              
              {/* display items in objects of array */}

              <tbody >
                {data ? data.map((values)=>{
        
                  const {orderReference,name,date,unitPrice,quantity,image,total,deliveryFee}=values;    //destructuring
                  return(
                    <>
                    <tr key={orderReference} onClick={() => handleRowClick(values)}>
                      <div class='flex  flex-row justify-between mr-8 border-b border-blue-gray-50'>
                      <td class="p-3 w-12 flex items-center">
                        <img src={image} alt={name} style={{borderRadius:"50%", height:"30px" ,width:"30px", marginRight:"8px"}}/>
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                          {name}
                        </p>
                      {/* <div class="flex space-x-5  ">
                        </div> */}
                      </td>
                      {/* <td class="p-3 w-24 ">
                          <div class="flex space-x-5  ">
                       
                        </div>
                      </td> */}
                      <td class="p-3 ">
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                          {orderReference}
                        </p>
                      </td>
                      <td class="p-3 ">
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                            {date}
                        </p>
                      </td>
                      <td class="p-3">
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                          {quantity}
                        </p>
                      </td> 
                      <td class="p-3 ">
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                          {total}
                        </p>
                      </td> 
                      <td class="p-3 ">
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                          {deliveryFee}
                        </p>
                      </td>
                      </div>       
                    </tr>
                    
                    </>
                  )
                }): "Loading..."}

                
          
              </tbody>
            </table>
          </div>

          <div class="sm:hidden">
          {newOrders.map((values)=>{
            const {orderReference,name,date,quantity,courierId,image,price,isCancelled}=values;    //destructuring
            return(
              <>
              <div className='bg-primary p-4  rounded-lg shadow mt-8 text-white '>
            
                  <img src={image} alt={name} className='w-24 h-14 pl-8' />

                  <div className='grid grid-cols-2 gap-7 mt-2'>
                    <div className='pl-5 '>
                    <div className='text-base  font-medium'>{name} - {quantity}Kg</div>
                    <div className='text-sm text-custom_gray'>Rs.{price}</div>
                    <div className='text-sm text-gray-300'>{date}</div>
                    </div >
                    <div className='text-primary bg-gray-200 p-3 rounded w-32 '>
                    <div className='text-sm '>courier Id: {courierId}</div>             
                    <div className='text-md'> {orderReference}</div>
                    </div>
                  
                  </div>
              </div>
              </>
            )  
          })}
          </div>      
        </div>        
    </div>

  )
}