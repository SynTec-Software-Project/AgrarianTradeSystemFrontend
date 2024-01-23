"use client";
import { useState } from 'react';
import React from 'react';
import courierTableData from '../../data/courier-table-data';


export default function TabAndTables() {
  const [data,setData] =useState(courierTableData);
  const [tab,setTab]=useState('');
  const filterResult=(statusItem)=>{
    const result=courierTableData.filter((curData)=>{
      return curData.status===statusItem;
    } );
    setData(result);

  };
  const clickTab = (newTab) =>{
    setTab(newTab);
  }
    

  return (
    <div>
        <div className='flex sm:justify-end justify-center sm:mr-10 mr-0 text-custom-gray  font-medium'>

            <div className='flex space-x-20 -mt-10 text-sm '>    
                <button onClick={()=>{
                  filterResult('readytopickup');
                  clickTab("Ready to pickup")
                }}  
                  className={`focus:outline-none  ${tab === "Ready to pickup" ? 'text-primary' : 'text-custom_gray'}`} >
                    Ready to pickup
                </button>

                <button onClick={()=>{
                  filterResult('pickedup');
                  clickTab("Picked up")
                }}
                className={`focus:outline-none ${tab === "Picked up" ? 'text-primary' : 'text-custom_gray'}`}>
                    Picked up
                </button>

                <button onClick={()=>{
                  filterResult('delivered');
                  clickTab("Delivered")
                }}
                className={`focus:outline-none ${tab === "Delivered" ? 'text-primary' : 'text-custom_gray '}`}>
                    Delivered
                </button>
            </div>

        </div>

        <div>
          <div class="relative flex flex-col w-full h-full  text-custom_gray bg-white shadow-md overflow-auto rounded-xl bg-clip-border mt-20 hidden sm:block ">
            <table class="w-full text-left table-auto min-w-max ">
              <thead>
                <tr>
                  <div class="flex flex-row justify-between border-b border-primary pr-12 pl-8">
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
                    Delivery Date
                    </p>
                  </th>
                  <th class="p-4  pt-8 pb-6 font-bold">
                    <p class="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900 ">
                    Quantity 
                    </p>
                  </th>
                  <th class="p-4  pt-8 pb-6 font-bold">
                    <p class="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900 ">
                    Courier charge 
                    </p>
                  </th>


                  </div>
                </tr>
              </thead>
              
              <tbody >
                {data.map((values)=>{
        
                  const {orderReference,product,orderPlaced,quantity,deliveryDate,photoName,courierCharge,status}=values;    //destructuring
                  return(
                    <>
                    <tr>
                      <div class='flex  flex-row justify-between  border-b border-blue-gray-50 pr-20 pl-10'>
                      <td class="p-3 w-24 ">
                          <div class="flex space-x-5  ">
                        <img src={photoName} alt={product} />
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                          {product}
                        </p>
                        </div>
                      </td>
                      <td class="p-3 ">
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                          {orderReference}
                        </p>
                      </td>
                      <td class="p-3 ">
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                            {orderPlaced}
                        </p>
                      </td>
                      <td class="p-3 ">
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                         {deliveryDate}
                        </p>
                      </td>
                      <td class="p-3">
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                        {quantity}Kg
                        </p>
                      </td> 
                      <td class="p-3 ">
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                         Rs. {courierCharge}
                        </p>
                      </td> 
                      </div>       
                    </tr>
                    
                    </>
                  )
                })}

                
          
              </tbody>
            </table>
          </div>

          <div class="sm:hidden">
          {data.map((values)=>{
            const {orderReference,product,orderPlaced,quantity,photoName,courierCharge,deliveryDate,status}=values;    //destructuring
            return(
              <>
              <div className='bg-primary p-4  rounded-lg shadow mt-8 text-white '>
            
                  <img src={photoName} alt={product} className='w-24 h-14 pl-8' />

                  <div className='grid grid-cols-2 gap-7 mt-2'>
                    <div className='pl-5 '>
                    <div className='text-base  font-medium'>{product} - {quantity}Kg</div>
                    <div className='text-sm text-custom_gray'>Rs.{courierCharge}</div>
                    <div className='text-sm text-gray-300'>{orderReference}</div>
                    </div >

                    <div className=' flex flex-col space-y-2 text-xs  italic -mt-8'>
                    <div className=' bg-gray-200 p-3 rounded w-32'>
                        <div className=' text-custom_gray'>Ordered Date:</div> 
                        <div className='text-primary'>{orderPlaced}</div>
                    </div>             
                    <div className=' bg-gray-200 p-2 rounded w-32'>
                        <div className=' text-custom_gray'> Delivery Date:</div>
                        <div className='text-primary'>{deliveryDate}</div>                        
                    </div>
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