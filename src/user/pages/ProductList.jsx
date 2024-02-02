import React from 'react'
import MainNav from '../components/MainNav'
import { Title } from '@/pages/SellerDashboard/dashboard/forms/Hint'
import Filterbar from '../components/Filterbar'
import ProductCard from '../components/ProductCard'

const ProductList = () => {
  return (
    <div>
      <MainNav />
      <div className='grid grid-cols-4'>
        <Filterbar />
        <div className=' flex flex-wrap py-4 px-3 justify-between col-span-3 bg-secondary'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
        </div>
      </div>
    </div>
  )
}

export default ProductList