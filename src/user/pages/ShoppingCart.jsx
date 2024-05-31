import React, { useEffect, useState } from 'react'
import MainNav from '../components/MainNav'
import CheckoutCard from '../components/CheckoutCard'
import { CartTable } from '../components/CartTable'
import axios from 'axios'
import { getCartItems } from '@/services/productServices'

const ShoppingCart = () => {
  const[cartItems, setCartItems] = useState([]);
  const BuyerId = 'anna.ratnayake@example.com';

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cartData = await getCartItems(BuyerId);
        setCartItems(cartData);
      } catch (error) {
        console.error('Error fetching cart details:', error);
      }
    };

    fetchCartItems();
  }, [cartItems]);

 const handleDeleteItem = (item) => {
    setCartItems(item);
  }

  return (
    <>
    <MainNav/>
    <div className='px-8 bg-secondary'>
        <div className='md:grid grid-cols-3'>
            <div className='md:col-span-2 mx-8 mt-4'>
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