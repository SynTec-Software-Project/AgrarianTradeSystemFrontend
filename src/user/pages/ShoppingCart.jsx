import React from 'react'
import MainNav from '../components/MainNav'
import CheckoutCard from '../components/CheckoutCard'
import { CartTable } from '../components/CartTable'

const ShoppingCart = () => {
  return (
    <>
    <MainNav/>
    <div className='px-8 bg-secondary'>
        <div className='grid grid-cols-3'>
            <div className='col-span-2 mx-8 mt-4'>
               <CartTable/>
            </div> 
            <div className='mx-3 mt-5'>
                <CheckoutCard/>
            </div>
        </div>
    </div>
    </>
  )
}

export default ShoppingCart