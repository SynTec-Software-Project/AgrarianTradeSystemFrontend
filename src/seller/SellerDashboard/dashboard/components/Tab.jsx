"use client";
import { useEffect, useState } from "react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Avatar } from "@material-tailwind/react";

const USER_ID = "	alicesmith@example.com";

export default function Tab({ defaultTab }) {
  const [data, setData] = useState([]);
  const [tab, setTab] = useState(defaultTab);
  const [filteredData, setFilteredData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getAllFarmerOrders();
  }, []);

  useEffect(() => {
    if (location.pathname === "/my-orders") {
      setTab(defaultTab);
    }
  }, [location.pathname, defaultTab]);

  const getAllFarmerOrders = async () => {
    try {
      // Make an HTTP GET request to fetch courier orders for the user with USER_ID
      const response = await axios.get(
        `https://localhost:7144/api/Order/farmer/${USER_ID}`
      );
      console.log("Farmer Orders Response:", response.data); // Log the response data to check

      // Update the state with the retrieved courier orders
      setData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error while fetching courier orders:", error);
    }
  };

  const filterResult = (statusItem) => {
    let result = [];
    if (statusItem === "All") {
      result = data.filter(
        (item) =>
          item.orderStatus.toLowerCase() === "ready to pickup" ||
          item.orderStatus.toLowerCase() === "picked up" ||
          item.orderStatus.toLowerCase() === "delivered"
      );
    } else {
      result = data.filter(
        (item) => item.orderStatus.toLowerCase() === statusItem.toLowerCase()
      );
    }
    setFilteredData(result);
    setTab(statusItem);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <div className="flex sm:justify-end justify-center sm:mr-16 mr-0 text-custom-gray  font-medium">
        <div className="flex  -mt-10 sm:text-sm text-xs border-b-2 ">
          <button
            onClick={() => {
              filterResult("All");
            }}
            className={`focus:outline-none  sm:w-40 w-24 transition duration-300 ease-in-out  ${
              tab === "All"
                ? "text-primary border-b-2 border-primary "
                : "text-custom_gray "
            }`}
          >
            All
          </button>

          <button
            onClick={() => {
              filterResult("Ready to pickup");
            }}
            className={`focus:outline-none  sm:w-40 w-24 transition duration-300 ease-in-out  ${
              tab === "Ready to pickup"
                ? "text-primary border-b-2 border-primary "
                : "text-custom_gray "
            }`}
          >
            Ready to pickup
          </button>

          <button
            onClick={() => {
              filterResult("Picked up");
            }}
            className={`focus:outline-none  sm:w-40 w-24 transition duration-300 ease-in-out ${
              tab === "Picked up"
                ? "text-primary border-b-2 border-primary "
                : "text-custom_gray"
            }`}
          >
            Picked up
          </button>

          <button
            onClick={() => {
              filterResult("Delivered");
            }}
            className={`focus:outline-none  sm:w-40 w-24 transition duration-300 ease-in-out ${
              tab === "Delivered"
                ? "text-primary border-b-2 border-primary "
                : "text-custom_gray "
            }`}
          >
            Delivered
          </button>
        </div>
      </div>

      <div>
        <div className="relative w-11/12   h-full ml-12 content-center  text-custom_gray bg-white shadow-md overflow-auto rounded-xl bg-clip-border mt-20 hidden sm:block ">
          <table className="w-full text-left table-auto  ">
            <thead>
              <tr>
                <div className="pl-7 pr-4 grid grid-cols-6 gap-6 border-b border-primary bg-green-500 text-gray-100 text-md">
                  <th className="col-span-1  ml-6  pt-8 pb-6 font-bold">
                    <p className="block font-sans  antialiased font-medium leading-none  ">
                      Product
                    </p>
                  </th>
                  <th
                    className="col-span-1 
                   pt-8 pb-6 font-bold"
                  >
                    <p className="block font-sans  antialiased font-medium leading-none  ">
                      Order reference
                    </p>
                  </th>
                  <th className="col-span-1  pt-8 pb-6 font-bold">
                    <p class="block font-sans  antialiased font-medium leading-none  ">
                      Order Placed
                    </p>
                  </th>
                  <th className="col-span-1  pt-8 pb-6 font-bold">
                    <p class="block font-sans  antialiased font-medium leading-none  ">
                      Quantity
                    </p>
                  </th>
                  <th className="col-span-1  pt-8 pb-6 font-bold">
                    <p className="block font-sans  antialiased font-medium leading-none  ">
                      price
                    </p>
                  </th>
                  {/* <th class="col-span-1  pt-8 pb-6 font-bold">
                    <p class="block font-sans  antialiased font-medium leading-none  ">
                      Status 
                    </p>
                  </th> */}
                </div>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((values) => {
                const {
                  orderID,
                  productTitle,
                  orderedDate,
                  totalQuantity,
                  productImageUrl,
                  totalPrice,
                  orderStatus,
                } = values; //destructuring
                return (
                  <tr
                    key={orderID}
                    className="hover:border hover:border-primary hover:bg-green-50 transition duration-300 ease-out"
                  >
                    <Link to={`/dashboard/my-orders/${orderID}`}>
                      <div className="pl-7 pr-4 grid grid-cols-6 gap-4 border-b border-blue-gray-50">
                        <td class="p-3 col-span-1 ">
                          <div className="flex space-x-5  ">
                            <Avatar
                              src={
                                "https://syntecblobstorage.blob.core.windows.net/products/" +
                                productImageUrl
                              }
                              size="sm"
                            />
                            <p className="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                              {productTitle}
                            </p>
                          </div>
                        </td>

                        <td className="p-3 col-span-1">
                          <p className="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                            {orderID}
                          </p>
                        </td>

                        <td className="p-3 col-span-1">
                          <p className="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                            {formatDate(orderedDate)}
                          </p>
                        </td>
                        <td className="p-3 col-span-1">
                          <p className="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                            {totalQuantity}Kg
                          </p>
                        </td>
                        <td className="p-3 col-span-1">
                          <p className="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1">
                            Rs.{totalPrice}
                          </p>
                        </td>
                        <td className="p-3 col-span-1  ">
                          {orderStatus.toLowerCase() === "ready to pickup" && (
                            <p className=" bg-red-200 rounded-lg block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 h-8 w-28 font-medium text-center">
                              Ready to Pickup
                            </p>
                          )}
                          {orderStatus.toLowerCase() === "picked up" && (
                            <p className=" bg-indigo-200 rounded-lg block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 h-8 w-28 font-medium text-center">
                              Picked up
                            </p>
                          )}
                          {orderStatus.toLowerCase() === "delivered" && (
                            <p className=" bg-primary rounded-lg block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 h-8 w-28 font-medium text-center">
                              Delivered
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
          {filteredData.map((values) => {
            const {
              orderId,
              product,
              orderedDate,
              totalQuantity,
              photoName,
              totalPrice,
              status,
            } = values; //destructuring
            return (
              <div
                key={orderId}
                className="group bg-gray-200 border hover:border hover:border-primary hover:bg-green-50 transition duration-300 ease-out  p-4  rounded-lg shadow mt-8  "
              >
                <Link to={`/dashboard/my-orders/${orderId}`}>
                  <img
                    src={photoName}
                    alt={product}
                    className="w-24 h-14 pl-8"
                  />

                  <div className="grid grid-cols-2 gap-x-10 mt-2 ">
                    <div className="col-span-1 pl-3">
                      <div className="text-md pb-2 font-medium text-gray-700 ">
                        {product} - {totalQuantity}Kg
                      </div>
                      <div className="text-sm  text-primary ">
                        Rs.{totalPrice}
                      </div>
                      <div className="text-sm italic text-gray-400">
                        {orderedDate}
                      </div>
                    </div>
                    <div className="col-span-1 text-gray-600 flex flex-col space-y-3  group-hover:text-custom_gray">
                      <div className="">
                        {status === "Ready to pickup" && (
                          <p className=" bg-red-200 rounded-lg block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 h-8 w-28 font-medium text-center">
                            {status}
                          </p>
                        )}
                        {status === "Picked up" && (
                          <p className=" bg-indigo-200 rounded-lg block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 h-8 w-28 font-medium text-center">
                            {status}
                          </p>
                        )}
                        {status === "Delivered" && (
                          <p className=" bg-primary rounded-lg block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900 pt-1 h-8 w-28 font-medium text-center">
                            {status}
                          </p>
                        )}
                      </div>
                      <div className="text-md font-semibold pl-3">
                        {" "}
                        {orderId}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
