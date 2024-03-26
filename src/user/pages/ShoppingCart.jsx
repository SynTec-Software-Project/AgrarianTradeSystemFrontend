import React, { useEffect, useState } from 'react'
import MainNav from '../components/MainNav'
import CheckoutCard from '../components/CheckoutCard'
import { CartTable } from '../components/CartTable'
import axios from 'axios'

const ShoppingCart = () => {
  const[cartItems, setCartItems] = useState([]);
  const BuyerId = 'rashmina@email.com';
  useEffect(() => {
    axios.get(`https://localhost:44376/api/ShoppingCart/items?customerId=${BuyerId}`)
    .then((response) => {
      setCartItems(response.data);
    });
  }, [cartItems]);

 const handleDeleteItem = (item) => {
    setCartItems(item);
  }

  return (
    <>
    <MainNav/>
    <div className='px-8 bg-secondary'>
        <div className='grid grid-cols-3'>
            <div className='col-span-2 mx-8 mt-4'>
               <CartTable cartItems={cartItems} handleDeleteItem={handleDeleteItem}/>
            </div> 
            <div className='mx-3 mt-5'>
                <CheckoutCard cartItems={cartItems}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default ShoppingCart