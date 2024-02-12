import React from 'react'
import { useState } from 'react';
const UpdateProduct = () => {
  const [product, setProduct] = useState('');

  const updateProduct = async () => {
    try {
      const response = await axios.put('/api/products', product);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      
    </div>
  )
}

export default UpdateProduct