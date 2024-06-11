import React, { useState, useEffect } from 'react'; //JavaScript library for building user interfaces
import axios from 'axios'; //for making requests to server endpoints
import { useNavigate } from 'react-router-dom'; //routing library, used for navigating between different pages.
import moment from 'moment'; //A library for formatting dates and times in JavaScript.

export default function CourierNewOrdersTab() {
  // Default courier ID
  const courierID = 'lasith.malinga@example.com';
  
  // State variables
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  
  // Navigation hook
  const navigate = useNavigate();
  
  // Fetching data from the server on component mount
  useEffect(() => {
    axios.get(`https://localhost:7144/api/Order/courier/${courierID}`) //api call for get couriers orders, based on CourierID
      .then((response) => {
        // Filtering the response data for pending orders
        const filteredData = response.data.filter((item) => {
          if (item.orderStatus === "pending") {
            return item;
          }
        });
        setData(filteredData);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  // Handling row click event
  const handleRowClick = (id) => {  
    navigate(`orderlist-details/${id}`);
  };

  return (
    <div>
      <div>
        {/* Table to display courier orders */}
        <div className="relative flex flex-col w-full h-full text-custom_gray bg-white shadow-md overflow-auto rounded-xl bg-clip-border mt-20 hidden sm:block">
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              {/* Table header */}
              <tr className="border-b border-primary mr-6">
                <th className="p-4 pt-8 pb-6 font-bold w-24 text-center align-middle">Product</th>
                <th className="p-4 pt-8 pb-6 font-bold w-24 text-center align-middle">Order reference</th>
                <th className="p-4 pt-8 pb-6 font-bold w-24 text-center align-middle">Order Placed</th>
                <th className="p-4 pt-8 pb-6 font-bold w-24 text-center align-middle">Quantity (Kg)</th>
                <th className="p-4 pt-8 pb-6 font-bold w-24 text-center align-middle">Delivery Fee</th>
              </tr>
            </thead>
            <tbody>
              {/* Table rows */}
              {data.map((values) => {
                const { orderID, productTitle, orderedDate, totalQuantity, productImageUrl, deliveryFee } = values;
                const dateTimeString = orderedDate; //Extract the orderedDate property from the current item and store it as a string
                const date = moment(dateTimeString).format("YYYY-MM-DD"); //Use Moment.js to format the dateTimeString into a specific date format ("YYYY-MM-DD")
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
                        <img src={`https://syntecblobstorage.blob.core.windows.net/products/${productImageUrl}`} alt={productTitle} style={{ borderRadius: '100%', height: '40px', width: '40px', marginRight: '8px' }} />
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
                         {deliveryFee.toFixed(2)} {/*Convert the deliveryFee to a string with exactly two decimal places for consistent display */}
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
