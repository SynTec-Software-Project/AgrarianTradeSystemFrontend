import React from 'react'
import MainNav from '../components/MainNav'
import Filterbar from '../components/Filterbar'
import ProductsCard from '../components/ProductsCard'
import axios from 'axios'
import { useEffect, useState } from 'react'
import SortBar from '../components/SortBar'
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState("");
  
  //sort product list
  if(sortedProducts=='asc' || sortedProducts=='desc'){
    useEffect(() => {
      axios.get(`https://localhost:7144/api/product/sorted?sortOrder=${sortedProducts}`)
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      });
    }, [sortedProducts]);
  }else {
    useEffect(() => {
      axios.get('https://localhost:7144/api/product')
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data); 
      });
    }, [sortedProducts]);
  }

   // filter products based on selected filters
   const applyFilters = (filteredData) => {
    setFilteredProducts(filteredData);
  };

  // sort products based on selected sorting option
  const handleSortedData = (sortedData) => {
    if (sortedData === 'asc' || sortedData ==='desc') {
      setSortedProducts(sortedData);
    } else {
      setSortedProducts(null);
    }
  };
  return (
    <div>
      <MainNav />
      <SortBar handleSortedData={handleSortedData}/>
      <div className='grid grid-cols-5'>
       <Filterbar items={products} applyFilters={applyFilters} />
        <div className=' col-span-4 overflow-y-auto flex flex-wrap py-4  px-4 gap-6  bg-secondary'>
          
          {filteredProducts.length>0 ?
          filteredProducts.map((product,index) => {
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
            ):
            <div className='w-screen h-screen flex justify-center'>
              <p className='text-xl'>Not available !</p>
            </div>
            }
        </div>
      </div>
    </div>

  )
}

export default ProductList