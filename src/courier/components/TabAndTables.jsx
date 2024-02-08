"use client";
import {React, useState } from 'react';
import courierTableData from '../../data/courier-table-data';
import {Link} from 'react-router-dom'

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
        <div className='flex sm:justify-end justify-center sm:mr-16 mr-0 text-custom-gray  font-medium'>

            <div className='flex  -mt-10 text-sm  border-b-2 '> 
                <button onClick={()=>{
                  setData(courierTableData);
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
        <div class="relative w-11/12   h-full ml-12 content-center  text-custom_gray bg-white shadow-md overflow-auto rounded-xl bg-clip-border mt-20 hidden sm:block  ">
            <table class="w-full text-left table-auto  ">
              <thead>
                <tr>
                  <div class="pl-4 pr-4 grid grid-cols-7 gap-x-6 gap-4 border-b border-primary ">
                    <th class="col-span-1  ml-6  pt-8 pb-6 font-bold">

                    <p class="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900 ">
                      Product
                    </p>
                  </th>
                  <th class="col-span-1  pt-8 pb-6 font-bold">
                    <p class="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900 ">
                      Order reference 
                    </p>
                  </th>
                  <th class="col-span-1  pt-8 pb-6 font-bold">
                    <p class="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900 ">
                    Delivery Date
                    </p>
                  </th>
                  <th class="col-span-1  pt-8 pb-6 font-bold">
                    <p class="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900 ">
                    Quantity 
                    </p>
                  </th>
                  <th class="col-span-1  pt-8 pb-6 font-bold">
                    <p class="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900 ">
                    Courier charge
                    </p>
                  </th>
                  <th class="col-span-1  pt-8 pb-6 font-bold">
                    <p class="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900 ">
                      Location
                    </p>
                  </th>
                  {/* <th class="col-span-1  pt-8 pb-6 font-bold">
                    <p class="block font-sans text-sm antialiased font-medium leading-none text-blue-gray-900 ">
                      status
                    </p>
                  </th> */}
                  </div>
                </tr>
              </thead>
              
              <tbody >
                {data.map((values)=>{
        
                  const {orderReference,product,location,deliveryDate,quantity,photoName,courierCharge,status}=values;    //destructuring
                  return(
                    <>                  
                    <tr key={orderReference} className='hover:border hover:border-primary hover:bg-green-50 transition duration-300 ease-out ease-in'>
                    <Link to={{
                      pathname:`/couriers/my-orders/${orderReference}`,
                      state: {status} 
                      }}
                      >
                      <div class=' pl-4 pr-4 grid grid-cols-7 gap-x-6 gap-4 border-b border-blue-gray-50'>
                      <td class="p-3 col-span-1 ">
                          <div class="flex space-x-5  ">
                        <img src={photoName} alt={product} />
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                          {product}
                        </p>
                        </div>
                      </td>
                      
                      <td class="p-3 col-span-1">
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                          {orderReference}  
                        </p>
                      </td>
                      
                      <td class= "p-3 col-span-1">
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                          {deliveryDate}
                        </p>
                      </td>
                      <td class="p-3 col-span-1">
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                        {quantity}Kg 
                        </p>
                      </td>
                      <td class="p-3 col-span-1">
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                          Rs.{courierCharge}
                        </p>
                      </td> 
                      <td class="p-3 col-span-1">
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                          {location}
                        </p>
                      </td>
                      <td class="p-3 col-span-1  ">
                          {status==='readytopickup' && (
                            <p class=" bg-red-300 rounded-lg block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 h-8 w-28 font-medium text-center">
                              Ready to Pickup
                            </p>
                          )}
                          {status==='pickedup' && (
                            <p class=" bg-indigo-200 rounded-lg block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 h-8 w-28 font-medium text-center">
                              Picked Up
                            </p>
                          )}
                          {status==='delivered' && (
                            <p class=" bg-primary rounded-lg block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 h-8 w-28 font-medium text-center">
                              Delivered
                            </p>
                          )}  
                      </td> 
                      </div>  
                      </Link>     
                    </tr>
                    
                    
                    </>
                  )
                })}

                
          
              </tbody>
            </table>
          </div>

          <div class="sm:hidden">
          {data.map((values)=>{
            const {orderReference,product,location,quantity,deliveryDate,photoName,courierCharge,status}=values;    //destructuring
            return(
              <>
              <div className='group bg-gray-200 border hover:border hover:border-primary hover:bg-green-50 transition duration-300 ease-out  p-4  rounded-lg shadow mt-8  '>
              <Link to={`/couriers/my-orders/${orderReference}`}>
                <div className='grid grid-cols-2 gap-x-10 mt-2'>
                <div>
                  <img src={photoName} alt={product} className='w-24 h-14 pl-8' />
                  <div className='pl-5 mt-8'>
                  <div className='text-md pb-2 font-medium text-gray-700 '>{product} - {quantity}Kg</div>
                  <div className='text-sm  text-primary '>Rs.{courierCharge}</div>
                  <div className='text-sm italic text-gray-400'>{orderReference}</div>
                  </div >
                </div>
                <div>
                  <div className='text-gray-600  p-2  group-hover:text-custom_gray flex flex-col space-y-5'>
                    <div >
                    <div className='text-sm '> Location:</div>             
                    <div className='text-md font-semibold'> {location}</div>
                    </div>
                    <div>
                    {status==='readytopickup' && (
                            <p class=" bg-red-300 rounded-lg block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 h-8 w-28 font-medium text-center">
                              {status}
                            </p>
                          )}
                          {status==='pickedup' && (
                            <p class=" bg-indigo-200 rounded-lg block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 h-8 w-28 font-medium text-center">
                              {status}
                            </p>
                          )}
                          {status==='delivered' && (
                            <p class=" bg-primary rounded-lg block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 h-8 w-28 font-medium text-center">
                              {status}
                            </p>
                          )}  
                    </div>
                    <div>
                    <div className='text-sm '> Delivery Date:</div>             
                    <div className='text-md font-semibold'> {deliveryDate}</div>
                    </div>
                    

                  </div>
                </div> 
                </div>
                  </Link>
              </div>
              </>
            )  
          })}
          </div>

          
        
        </div>  

        
    </div>
        
   


  )
}