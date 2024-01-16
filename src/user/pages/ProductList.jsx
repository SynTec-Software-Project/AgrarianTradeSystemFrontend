import React from 'react'
import MainNav from '../components/MainNav'
import { Title } from '@/pages/SellerDashboard/dashboard/forms/Hint'
import Filterbar from '../components/Filterbar'


  
const ProductList = () => {
    
  return (
    <div>
        <MainNav/>
        <div className='grid grid-cols-4'>
              <Filterbar/>
            <div className='col-span-3 bg-secondary overflow-y-auto h-screen'>
                {/* products */}
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam minus reiciendis odio magnam tempora molestiae quidem officia, 
                    rchitecto reprehenderit explicabo provident molestias debitis eveniet beatae et voluptate harum esse.
                </p>
            </div>
        </div>
    </div>
  )
}

export default ProductList