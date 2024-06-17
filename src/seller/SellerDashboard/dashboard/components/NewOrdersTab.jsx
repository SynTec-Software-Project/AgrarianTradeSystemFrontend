import { useState,useEffect } from 'react';
import React from 'react';
import sellerTableData from '../../../../data/seller-table-data';
import { Select, Option } from "@material-tailwind/react";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { getAllFarmerOrders } from '@/services/orderServices';
import { FARMER_ID } from '@/usersID';
export default function NewOrdersTab() {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const navigate = useNavigate();
  const sellerID =FARMER_ID;
  const filterResult = (filterValue) => {
    let result;

    if (filterValue === 'all') {
      // Show all results when "All" is selected
      result = sellerTableData;
    } else {
      // Filter based on 'n' or 'y' for New Orders or Cancelled
      result = sellerTableData.filter((curData) => curData.isCancelled === filterValue);
    }

    setData(result);
  };
  const clickTab = (newTab) =>{
    setTab(newTab);
  }
  const handleRowClick = (id) => {
    navigate(`/dashboard/select-courier/${id}`);
  };

  // useEffect(() => {
  //   const fetchOrders = async () => {
  //     try {
  //       const orders = await getAllFarmerOrders(sellerID);
  //       setData(orders);
  //     } catch (error) {
  //       console.error('Error fetching orders:', error);
  //       // Handle errors appropriately, e.g., show a notification to the user
  //     }
  //   };

  //   fetchOrders();
  // }, [sellerID]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const orders = await getAllFarmerOrders(sellerID);

        // Filter the orders where the status is either 'new' or 'pending'
        const filteredOrders = orders.filter(order => 
          order.orderStatus === 'new' || order.orderStatus === 'pending'
        );
        setData(filteredOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [sellerID]);

  return (
    <div>
      <div>
        <div className="relative flex-col w-full h-full text-custom_gray bg-white shadow-md overflow-auto rounded-xl bg-clip-border mt-8 hidden sm:block">
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr class="border-b border-primary mr-6">
                <th className="p-4 py-5 font-bold w-24 text-center align-middle">Product</th>
                <th className="p-4 py-5 font-bold w-24 text-center align-middle">Order reference</th>
                <th className="p-4 py-5 font-bold w-24 text-center align-middle">Order Placed</th>
                <th className="p-4 py-5 font-bold w-24 text-center align-middle">Quantity (Kg)</th>
                <th className="p-4 py-5 font-bold w-24 text-center align-middle">Total</th>
                <th className="p-4 py-5 font-bold w-24 text-center align-middle">Delivery</th>
              </tr>
            </thead>
            <tbody>
              {data.map((values) => {
                const { orderID, productTitle, orderedDate, totalQuantity, productImageUrl, totalPrice ,orderStatus } = values;
                const dateTimeString = orderedDate;
                const date = moment(dateTimeString).format("YYYY-MM-DD")
                return (
                  <tr
                    key={orderID}
                    onClick={() => handleRowClick(orderID)}
                    onMouseEnter={() => setSelectedRow(orderID)}
                    onMouseLeave={() => setSelectedRow(null)}
                    className={selectedRow === orderID ? 'bg-gray-200 cursor-pointer' : 'cursor-pointer'}
                  >
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