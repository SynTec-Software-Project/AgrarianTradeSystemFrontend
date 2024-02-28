import React from 'react'
import MainNav from '../components/MainNav'
import Filterbar from '../components/Filterbar'
import ProductsCard from '../components/ProductsCard'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const ProductList = () => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    axios.get("https://localhost:44376/api/product")
      .then((response) => {
        setProducts((data) => {
          return response.data;
        });
      });
  }, []);


  return (
    <div>
      <MainNav />
      <div className='flex'>
        <Filterbar  />
        <div className='overflow-y-auto flex flex-wrap py-4 px-3 gap-6  bg-secondary'>
            {products.map((product,index) => {
              const key=product.productID || index
              return(    
                <ProductsCard
                  key={key}
                  productID={product.productID}
                  productTitle={product.productTitle}
                  productImageUrl={product.productImageUrl}
                  minimumQuantity={product.minimumQuantity}
                  availableStock={product.availableStock}
                  unitPrice={product.unitPrice}
                 />
              );
            },
            )}
        </div>
      </div>
    </div>

  )
}

export default ProductList