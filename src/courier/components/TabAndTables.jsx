"use client";
import {React, useState,useEffect } from 'react';
import courierTableData from '../../data/courier-table-data';
import {Link,useLocation} from 'react-router-dom'
import axios from 'axios';

export default function TabAndTables({defaultTab}) {
  const [data,setData] =useState([]);
  const [tab,setTab]=useState(defaultTab);
  const [filteredData, setFilteredData] = useState([]);
  const location = useLocation();
  

  // const filterResult=(statusItem)=>{
  //   const result=courierTableData.filter((curData)=>{
  //     return curData.status===statusItem;
  //   } );
  //   setData(result);
  // };
  
  // const clickTab = (newTab) =>{
  //   setTab(newTab);
  // }

  useEffect(() => {
    getAllAssigns ();
  }, []);

  useEffect(() => {
    if (location.pathname === '/my-orders') {
      setTab(defaultTab);
    }
  }, [location.pathname,defaultTab]);


  const getAllAssigns = async () => {
    try {
      // Api call for fetching start locations
      const response = await axios.get("https://localhost:7144/api/assigns");
      console.log("Response from backend:", response.data); // for checking the response is correct or not
      setData(response.data);
      setFilteredData(response.data); // Initialize filteredData with the same data
    } catch (error) {
      console.error("Error while sending date to backend", error);
    }
  };

  const filterResult = (statusItem) => {
    if (statusItem === 'All') {
      setFilteredData(data);
    } else {
      const result = data.filter(assign => assign.status.toLowerCase() === statusItem.toLowerCase());
      setFilteredData(result);
    }
    setTab(statusItem);
  };

  return (
    <div>
        <div className='flex sm:justify-end justify-center sm:mr-16 mr-0 text-custom-gray  font-medium'>

            <div className='flex  -mt-10 text-sm  border-b-2 '> 
                <button onClick={()=>{
                  // setData(courierTableData);
                  // clickTab("All")
                  filterResult("All")
                }}  
                  className={`focus:outline-none  sm:w-40 w-28 transition duration-300 ease-in-out  ${tab === "All" ? 'text-primary border-b-2 border-primary border-b-2 ' : 'text-custom_gray '}`} >
                    All
                </button>

                 <button onClick={()=>{
                  filterResult('Ready to pickup');
                  // filterResult('readytopickup');
                  // clickTab("Ready to pickup")
                }}  
                  className={`focus:outline-none  sm:w-40 w-28 transition duration-300 ease-in-out  ${tab === "Ready to pickup" ? 'text-primary border-b-2 border-primary border-b-2 ' : 'text-custom_gray '}`} >
                    Ready to pickup
                </button>

                 <button onClick={()=>{
                  filterResult('Picked up');
                  // filterResult('pickedup');
                  // clickTab("Picked up")
                }}
                className={`focus:outline-none  sm:w-40 w-28 transition duration-300 ease-in-out ${tab === "Picked up" ? 'text-primary border-b-2 border-primary ' : 'text-custom_gray'}`}>
                    Picked up
                </button>

                  <button onClick={()=>{
                    filterResult('Delivered');
                  // filterResult('delivered');
                  // clickTab("Delivered")
                }}
                className={`focus:outline-none  sm:w-40 w-28 transition duration-300 ease-in-out ${tab === "Delivered" ? 'text-primary border-b-2 border-primary ' : 'text-custom_gray '}`}>
                    Delivered
                </button>

                
            </div>
        </div>

        <div>
        <div class="relative w-11/12   h-full ml-12 content-center  text-custom_gray bg-white shadow-md overflow-auto rounded-xl bg-clip-border mt-20 hidden sm:block  ">
            <table class="w-full text-left table-auto  ">
              <thead>
                <tr>
                  <div class="pl-4 pr-4 grid grid-cols-7 gap-x-6 gap-4 border-b border-primary bg-green-500 text-gray-100 text-md">
                    <th class="col-span-1  ml-6  pt-8 pb-6 font-bold">

                    <p class="block font-sans text-sm antialiased font-medium leading-none  ">
                      Product
                    </p>
                  </th>
                  <th class="col-span-1  pt-8 pb-6 font-bold">
                    <p class="block font-sans text-sm antialiased font-medium leading-none  ">
                      Order reference 
                    </p>
                  </th>
                  <th class="col-span-1  pt-8 pb-6 font-bold">
                    <p class="block font-sans text-sm antialiased font-medium leading-none  ">
                    Delivery Date
                    </p>
                  </th>
                  <th class="col-span-1  pt-8 pb-6 font-bold">
                    <p class="block font-sans text-sm antialiased font-medium leading-none  ">
                    Pickup Date 
                    </p>
                  </th>
                  <th class="col-span-1  pt-8 pb-6 font-bold">
                    <p class="block font-sans text-sm antialiased font-medium leading-none  ">
                    Courier charge
                    </p>
                  </th>
                  <th class="col-span-1  pt-8 pb-6 font-bold">
                    <p class="block font-sans text-sm antialiased font-medium leading-none  ">
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
                {filteredData.map((values)=>{
        
                  const {orderID,productTitle,customerAddL3,deliveryDate,pickupDate,productImageUrl,deliveryFee,orderStatus}=values;    //destructuring
                  return(
                    <>                  
                    <tr key={orderID} className='hover:border hover:border-primary hover:bg-green-50 transition duration-300 ease-out ease-in'>
                    <Link to={{
                      pathname:`/couriers/my-orders/${orderID}`,
                      state: {status} 
                      }}
                      >
                      <div class=' pl-4 pr-4 grid grid-cols-7 gap-x-6 gap-4 border-b border-blue-gray-50'>
                      <td class="p-3 col-span-1 ">
                          <div class="flex space-x-5  ">
                        <img src={productImageUrl} /*alt={productTitle}*/ />
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                          {productTitle}
                        </p>
                        </div>
                      </td>
                      
                      <td class="p-3 col-span-1">
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                          {orderID}  
                        </p>
                      </td>
                      
                      <td class= "p-3 col-span-1">
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                        {formatDate(deliveryDate)}
                        </p>
                      </td>
                      <td class="p-3 col-span-1">
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                        {formatDate(pickupDate)} 
                        </p>
                      </td>
                      <td class="p-3 col-span-1">
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                          Rs.{deliveryFee}
                        </p>
                      </td> 
                      <td class="p-3 col-span-1">
                        <p class="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                          {customerAddL3}
                        </p>
                      </td>
                      <td className="p-3 col-span-1  ">
                          {orderStatus==='Ready to pickup' && (
                            <p className=" bg-red-200 rounded-lg block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 h-8 w-28 font-medium text-center">
                              Ready to Pickup
                            </p>
                          )}
                          {orderStatus==='Picked up' && (
                            <p className=" bg-indigo-200 rounded-lg block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 h-8 w-28 font-medium text-center">
                              Picked up
                            </p>
                          )}
                          {orderStatus==='Delivered' && (
                            <p className=" bg-primary rounded-lg block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 h-8 w-28 font-medium text-center">
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
          {filteredData.map((values)=>{
                  const {orderID,productTitle,customerAddL3,deliveryDate,pickupDate,productImageUrl,deliveryFee,orderStatus}=values;    //destructuring
                  return(
              <>
              <div className='group bg-gray-200 border hover:border hover:border-primary hover:bg-green-50 transition duration-300 ease-out  p-4  rounded-lg shadow mt-8  '>
              <Link to={`/couriers/my-orders/${orderID}`}>
                <div className='grid grid-cols-2 gap-x-10 mt-2'>
                <div>
                  <img src={productImageUrl} /*alt={productTitle}*/ className='w-24 h-14 pl-8' />
                  <div className='pl-5 mt-8'>
                  <div className='text-md pb-2 font-medium text-gray-700 '>{productTitle}</div>
                  <div className='text-sm  text-primary '>Rs.{deliveryFee}</div>
                  <div className='text-sm italic text-gray-400'>{orderID}</div>
                  </div >
                </div>
                <div>
                  <div className='text-gray-600  p-2  group-hover:text-custom_gray flex flex-col space-y-5'>
                    <div >
                    <div className='text-sm '> Location:</div>             
                    <div className='text-md font-semibold'> {customerAddL3}</div>
                    </div>
                    <div>
                          {orderStatus==='Ready to pickup' && (
                            <p class=" bg-red-200 rounded-lg block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 h-8 w-28 font-medium text-center">
                              Ready to Pickup
                            </p>
                          )}
                          {orderStatus==='Picked up' && (
                            <p class=" bg-indigo-200 rounded-lg block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 h-8 w-28 font-medium text-center">
                              Picked up
                            </p>
                          )}
                          {orderStatus==='Delivered' && (
                            <p class=" bg-primary rounded-lg block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 h-8 w-28 font-medium text-center">
                              Delivered
                            </p>
                          )}  
                    </div>
                    <div>
                    <div className='text-sm '> Delivery Date:</div>             
                    <div className='text-md font-semibold'> {formatDate(deliveryDate)}</div>
                    </div>
                    <div>
                    <div className='text-sm '> Pickup Date:</div>             
                    <div className='text-md font-semibold'> {formatDate(pickupDate)}</div>
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