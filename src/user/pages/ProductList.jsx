import React from 'react'
import MainNav from '../components/MainNav'
import Filterbar from '../components/Filterbar'
import ProductsCard from '../components/ProductsCard'
import axios from 'axios'
import { useEffect, useState } from 'react'
import SortBar from '../components/SortBar'
import LoadingProducts from '@/courier/components/LoadingProducts'
import { getSortedProducts, getUnsortedProducts } from '@/services/productServices'
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState("");
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let data;
        if (sortedProducts === 'asc' || sortedProducts === 'desc') {
          data = await getSortedProducts(sortedProducts);
        } else {
          data = await getUnsortedProducts();
        }
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [sortedProducts]);
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
            <LoadingProducts/>
            }
        </div>
       
      </div>

    </div>

  )
}

export default ProductList