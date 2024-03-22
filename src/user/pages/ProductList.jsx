import React from 'react'
import MainNav from '../components/MainNav'
import Filterbar from '../components/Filterbar'
import ProductsCard from '../components/ProductsCard'


const ProductList = () => {
  return (
    <div>
      <MainNav />
      <div className='grid grid-cols-4'>
        <Filterbar />
        <div className=' flex flex-wrap py-4 px-3 justify-between col-span-3 bg-secondary'>
          <div className="justify-center px-4 py-4 mx-auto lg:py-0">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
              <ProductsCard />
              <ProductsCard />
              <ProductsCard />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductList