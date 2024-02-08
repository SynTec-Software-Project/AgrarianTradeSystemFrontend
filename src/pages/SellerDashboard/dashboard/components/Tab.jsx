"use client";
import { useState } from 'react';
import React from 'react';
import sellerTableData from '../../../../data/seller-table-data';
import {Link} from 'react-router-dom'

export default function Tab() {
  const [data,setData] =useState(sellerTableData);
  const [tab,setTab]=useState('');

  const filterResult=(statusItem)=>{
    const result=sellerTableData.filter((curData)=>{
      return curData.status===statusItem;
    } );
    setData(result);

  };

  const clickTab = (newTab) =>{
    setTab(newTab);
  }
    

  return (
    
    <div>
        <div className='flex sm:justify-end justify-center sm:mr-16 mr-0 text-custom-gray  font-medium'>
          <div  className='flex  -mt-10 text-sm  border-b-2 '> 
                <button onClick={()=>{
                  setData(sellerTableData);
                  clickTab("All")
                }}  
                  className={`focus:outline-none  sm:w-44 w-28 transition duration-300 ease-in-out  ${tab === "All" ? 'text-primary border-b-2 border-primary border-b-2 ' : 'text-custom_gray '}`} >
                    All
                </button>
                <button onClick={()=>{
                  filterResult('readytopickup');
                  clickTab("Ready to pickup")
                }}  
                  className={`focus:outline-none  sm:w-44 w-28 transition duration-300 ease-in-out  ${tab === "Ready to pickup" ? 'text-primary border-b-2 border-primary border-b-2 ' : 'text-custom_gray '}`} >
                    Ready to pickup
                </button>

                 <button onClick={()=>{
                  filterResult('pickedup');
                  clickTab("Picked up")
                }}
                className={`focus:outline-none  sm:w-44 w-28 transition duration-300 ease-in-out ${tab === "Picked up" ? 'text-primary border-b-2 border-primary ' : 'text-custom_gray'}`}>
                    Picked up
                </button>

                  <button onClick={()=>{
                  filterResult('delivered');
                  clickTab("Delivered")
                }}
                className={`focus:outline-none  sm:w-44 w-28 transition duration-300 ease-in-out ${tab === "Delivered" ? 'text-primary border-b-2 border-primary ' : 'text-custom_gray '}`}>
                    Delivered
                </button>

                
            </div>

        </div>

        <div>
          <div className="relative w-11/12   h-full ml-12 content-center  text-custom_gray bg-white shadow-md overflow-auto rounded-xl bg-clip-border mt-20 hidden sm:block ">
            <table className="w-full text-left table-auto  ">
              <thead>
                <tr>
                  <div className="pl-7 pr-4 grid grid-cols-6 gap-6 border-b border-primary ">
                  <th className="col-span-1  ml-6  pt-8 pb-6 font-bold">
                    <p className="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900 ">
                      Product
                    </p>
                  </th>
                  <th className="col-span-1 
                   pt-8 pb-6 font-bold">
                    <p className="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900 ">
                      Order reference 
                    </p>
                  </th>
                  <th className="col-span-1  pt-8 pb-6 font-bold">
                    <p class="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900 ">
                      Order Placed
                    </p>
                  </th>
                  <th className="col-span-1  pt-8 pb-6 font-bold">
                    <p class="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900 ">
                      Quantity 
                    </p>
                  </th>
                  <th className="col-span-1  pt-8 pb-6 font-bold">
                    <p className="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900 ">
                      price
                    </p>
                  </th>
                  {/* <th class="col-span-1  pt-8 pb-6 font-bold">
                    <p class="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900 ">
                      Status 
                    </p>
                  </th> */}
                  </div>
                </tr>
              </thead>
              
              <tbody >
                {data.map((values)=>{
        
                  const {orderReference,product,orderPlaced,quantity,photoName,price,status}=values;    //destructuring
                  return(                 
                    <tr key={orderReference} className='hover:border hover:border-primary hover:bg-green-50 transition duration-300 ease-out'>
                    <Link to={`/dashboard/my-orders/${orderReference}`}>
                      <div className='pl-7 pr-4 grid grid-cols-6 gap-4 border-b border-blue-gray-50'>
                      <td class="p-3 col-span-1 ">
                          <div className="flex space-x-5  ">
                        <img src={photoName} alt={product} />
                        <p className="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                          {product}
                        </p>
                        </div>
                      </td>
                      
                      <td className="p-3 col-span-1">
                        <p className="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">                          
                          {orderReference}               
                        </p>
                      </td>
                      
                      <td className= "p-3 col-span-1">
                        <p className="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                            {orderPlaced}
                        </p>
                      </td>
                      <td className="p-3 col-span-1">
                        <p className="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                        {quantity}Kg 
                        </p>
                      </td>
                      <td className="p-3 col-span-1">
                        <p className="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                          Rs.{price}
                        </p>
                      </td> 
                      <td className="p-3 col-span-1  ">
                          {status==='readytopickup' && (
                            <p className=" bg-red-300 rounded-lg block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 h-8 w-28 font-medium text-center">
                              {status}
                            </p>
                          )}
                          {status==='pickedup' && (
                            <p className=" bg-indigo-200 rounded-lg block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 h-8 w-28 font-medium text-center">
                              {status}
                            </p>
                          )}
                          {status==='delivered' && (
                            <p className=" bg-primary rounded-lg block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 h-8 w-28 font-medium text-center">
                              {status}
                            </p>
                          )}  
                      </td> 
                      </div>  
                      </Link>     
                    </tr>
                  );
                })}

                
          
              </tbody>
            </table>
          </div>

          <div className="sm:hidden">
          {data.map((values)=>{
            const {orderReference,product,orderPlaced,quantity,photoName,price,status}=values;    //destructuring
            return(
              <div key={orderReference} className='group bg-gray-200 border hover:border hover:border-primary hover:bg-green-50 transition duration-300 ease-out  p-4  rounded-lg shadow mt-8  '>
              <Link to={`/dashboard/my-orders/${orderReference}`}>
            
                  <img src={photoName} alt={product} className='w-24 h-14 pl-8' />

                  <div className='grid grid-cols-2 gap-x-10 mt-2 '>
                    <div className='col-span-1 pl-3'>
                    <div className='text-md pb-2 font-medium text-gray-700 '>{product} - {quantity}Kg</div>
                    <div className='text-sm  text-primary '>Rs.{price}</div>
                    <div className='text-sm italic text-gray-400'>{orderPlaced}</div>
                    </div >
                    <div className='col-span-1 text-gray-600 flex flex-col space-y-3  group-hover:text-custom_gray'>
                    <div className=''>
                    {status==='readytopickup' && (
                            <p className=" bg-red-300 rounded-lg block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 h-8 w-28 font-medium text-center">
                              {status}
                            </p>
                          )}
                          {status==='pickedup' && (
                            <p className=" bg-indigo-200 rounded-lg block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 h-8 w-28 font-medium text-center">
                              {status}
                            </p>
                          )}
                          {status==='delivered' && (
                            <p className=" bg-primary rounded-lg block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 h-8 w-28 font-medium text-center">
                              {status}
                            </p>
                          )}  
                    </div>             
                    <div className='text-md font-semibold pl-3'> {orderReference}</div>
                    </div>
                  
                  </div>
                  </Link>
              </div>
            )  
          })}
          </div>

          
        
        </div>  

        
    </div> 
  );
}