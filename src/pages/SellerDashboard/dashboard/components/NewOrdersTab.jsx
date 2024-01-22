"use client";
import { useState } from 'react';
import React from 'react';
import sellerTableData from '../../../../data/seller-table-data';


export default function NewOrdersTab() {
  const [data,setData] =useState(sellerTableData);
  const [tab,setTab]=useState('');
  const filterResult=(isCancelledItem)=>{
    const result=sellerTableData.filter((curData)=>{
      return curData.isCancelled===isCancelledItem;
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
                  filterResult('n');
                  clickTab("New Orders")
                }}  
                  className={`focus:outline-none  ${tab === "New Orders" ? 'text-primary' : 'text-custom_gray'}`} >
                    New Orders
                </button>

                <button onClick={()=>{
                  filterResult('y');
                  clickTab("cancelled")
                }}
                className={`focus:outline-none ${tab === "cancelled" ? 'text-primary' : 'text-custom_gray'}`}>
                    Cancelled
                </button>
                
            </div>

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
                      Unit Price
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
                      Delivery
                    </p>
                  </th>
                  </div>
                </tr>
              </thead>
              
              <tbody >
                {data.map((values)=>{
        
                  const {orderReference,product,orderPlaced,unitPrice,quantity,photoName,price,Delivery}=values;    //destructuring
                  return(
                    <>
                    <tr>
                      <div class='flex  flex-row justify-between mr-8 border-b border-blue-gray-50'>
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
                        {unitPrice} 
                        </p>
                      </td>
                      <td class="p-3">
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                          {quantity}
                        </p>
                      </td> 
                      <td class="p-3 ">
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                          {price}
                        </p>
                      </td> 
                      <td class="p-3 ">
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                          {Delivery}
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
            const {orderReference,product,orderPlaced,quantity,courierId,photoName,price,status}=values;    //destructuring
            return(
              <>
              <div className='bg-primary p-4  rounded-lg shadow mt-8 text-white '>
            
                  <img src={photoName} alt={product} className='w-24 h-14 pl-8' />

                  <div className='grid grid-cols-2 gap-7 mt-2'>
                    <div className='pl-5 '>
                    <div className='text-base  font-medium'>{product} - {quantity}Kg</div>
                    <div className='text-sm text-custom_gray'>Rs.{price}</div>
                    <div className='text-sm text-gray-300'>{orderPlaced}</div>
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