import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { Select, Option } from "@material-tailwind/react";

export default function NewOrdersTab() {
  const [data, setData] = useState([]); // State to store fetched data
  const [selectedRow, setSelectedRow] = useState(null); // State to store the ID of the selected row
  const navigate = useNavigate(); // Navigate function from React Router
  const sellerID = 'alicesmith@example.com'; // Seller ID, for example

  // State variable to manage filter options, initialized with default values
  const [filterOptions, setFilterOptions] = useState(["new", "pending"]);

  // Function to handle filtering when the user selects an option from the dropdown
  const filterResult = (filterValue) => {
    if (filterValue === "new") {
      setFilterOptions(["new"]);
    } else if (filterValue === "pending") {
      setFilterOptions(["pending"]);
    } else {
      setFilterOptions(["new", "pending"]);
    }
  };

  // Function to handle row click, navigates to a different page
  const handleRowClick = (id) => {
    navigate(`/dashboard/select-courier/${id}`);
  };

  // Effect hook to fetch orders from the server and filter based on seller ID and filter options
  useEffect(() => {
    axios.get(`https://localhost:7144/api/Order/farmer/${sellerID}`) 
      .then((response) => {
        // Filter the data based on filter options
        const filteredData = response.data.filter((item) => {
          if (filterOptions.includes(item.orderStatus)) {
            return item;
          }
        });
        console.log(response.data);
        setData(filteredData); // Update state with filtered data
      })
      .catch((error) => {
        console.error('Error fetching orders:', error);
      });
  }, [sellerID, filterOptions]); // Dependencies for the effect hook

  return (
    <div>
      {/* Dropdown to select filter options */}
      <div className="float-right w-72 mb-3">
        <Select label="Order Details" onChange={filterResult}>
          <Option value='all'>All</Option>
          <Option value='new'>New</Option>
          <Option value='pending'>Pending</Option>
        </Select>
      </div>
      {/* Table to display order details */}
      <div>
        <div className="relative flex flex-col w-full h-full text-custom_gray bg-white shadow-md overflow-auto rounded-xl bg-clip-border mt-20 hidden sm:block">
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr className="border-b border-primary mr-6">
                {/* Table headers */}
                <th className="p-4 pt-8 pb-6 font-bold w-24 text-center align-middle">Product</th>
                <th className="p-4 pt-8 pb-6 font-bold w-24 text-center align-middle">Order reference</th>
                <th className="p-4 pt-8 pb-6 font-bold w-24 text-center align-middle">Order Placed</th>
                <th className="p-4 pt-8 pb-6 font-bold w-24 text-center align-middle">Quantity (Kg)</th>
                <th className="p-4 pt-8 pb-6 font-bold w-24 text-center align-middle">Total</th>
                <th className="p-4 pt-8 pb-6 font-bold w-24 text-center align-middle">Delivery</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapping over the data to render rows */}
              {data.map((values) => {
                const { orderID, productTitle, orderedDate, totalQuantity, productImageUrl, totalPrice, orderStatus } = values;
                const dateTimeString = orderedDate;
                const date = moment(dateTimeString).format("YYYY-MM-DD");
                return (
                  <tr
                    key={orderID}
                    onClick={() => handleRowClick(orderID)}
                    onMouseEnter={() => setSelectedRow(orderID)}
                    onMouseLeave={() => setSelectedRow(null)}
                    className={selectedRow === orderID ? 'bg-gray-200 cursor-pointer' : 'cursor-pointer'}
                  >
                    {/* Table data cells */}
                    <td className="p-3 w-24 text-center align-middle">
                      <div className="flex flex-row items-center justify-center">
                        <img src={'https://syntecblobstorage.blob.core.windows.net/products/' + productImageUrl} alt={productTitle} style={{ borderRadius: "100%", height: "40px", width: "40px", marginRight: "8px" }} />
                        <p className="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900">
                          {productTitle}
                        </p>
                      </div>
                    </td>
                    <td className="p-3 w-24 text-center align-middle">
                      <p className="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900">
                        {orderID}
                      </p>
                    </td>
                    <td className="p-3 w-24 text-center align-middle">
                      <p className="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900">
                        {date}
                      </p>
                    </td>
                    <td className="p-3 w-24 text-center align-middle">
                      <p className="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900">
                        {totalQuantity}
                      </p>
                    </td>
                    <td className="p-3 w-24 text-center align-middle">
                      <p className="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900">
                        {totalPrice.toFixed(2)}
                      </p>
                    </td>
                    <td className="p-3 w-24 text-center align-middle">
                      <p className="block font-sans text-sm antialiased font-light leading-normal text-blue-gray-900">
                        {orderStatus}
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
