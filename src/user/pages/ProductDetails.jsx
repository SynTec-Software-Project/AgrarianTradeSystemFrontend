import React from 'react'
import MainNav from '../components/MainNav'
import { FaLocationDot } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import {
  Rating,
} from "@material-tailwind/react";
import ProductQuantity from '../components/ProductQuantity';
import axios from 'axios';
import { useEffect, useState } from 'react';
const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const {id} =useParams();

  useEffect(()=>{
    axios.get(`https://localhost:44376/api/Product/${id}`)
    .then(response => {
       setProduct(response.data);
    })
},[] );
 if(product.length === 0){
   return <div>Loading...</div>
  }
  return (
    <div className=' bg-secondary'>
      <MainNav />
      <div className=' grid grid-cols-4 px-12'>
        <div className=' col-span-3 h-auto bg-white rounded-md'>
          <div className=' grid grid-cols-3 px-8 '>
            {/* product image section */}
            <div className=' py-8'>
              <img src={"https://syntecblobstorage.blob.core.windows.net/products/" + product.productImageUrl} alt={product.productTitle} 
                className='object-cover rounded-lg w-full'
              />
            </div>
            {/* product details section */}
            <div className=' col-span-2 px-8 py-12'>
              <div className=' flex justify-between items-start'>
                {/* product name */}
                <div>
                  <h1 className=' text-3xl font-semibold text-gray-800'>{product.productTitle}</h1>
                  <div className="mb-3 flex gap-5 items-center justify-between">
                    <Rating value={4} />
                    <p className=' text-sm text-gray-700'>Reviews (4)</p>
                  </div>
                </div>
                <p className=' flex items-center gap-3 font-semibold text-gray-600 text-lg'><span><FaLocationDot /></span>Badulla</p>
              </div>
              {/* product description */}
              <div className=' my-3'>
                <p className=' text-gray-700'>{product.productDescription}</p>
              </div>
              {/* product price */}
              <div>
                <h1 className=' text-primary text-2xl font-semibold'>Rs.{product.unitPrice}</h1>
              </div>

              {/* product quantity */}
              <div>
                <h1 className='mt-8 mb-4 text-gray-800 text-sm'>Select Quantity :</h1>
                <ProductQuantity minimumQuantity={product.minimumQuantity} availableStock={product.availableStock} />
              </div>
              <div className='flex gap-3 justify-end mt-8'>
                <Link to={"/login"} className='bg-transparent border-primary border rounded-full inline-flex items-center 
                                      justify-center py-2 px-8 text-center text-sm font-medium  text-primary
                                      disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
                  Buy Now
                </Link>

                <button className='bg-primary border-primary border rounded-full inline-flex items-center 
                                      justify-center py-2 px-7 text-center text-sm font-medium   text-white hover:bg-primary/90
                                      disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

        </div>
        {/* courier charges section */}
        <div>
          courier charges
        </div>
      </div>
    </div>
  )
}

export default ProductDetails