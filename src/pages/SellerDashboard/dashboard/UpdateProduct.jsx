import React from 'react'
import axios from 'axios';
import ProductForm from './forms/ProductForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
const UpdateProduct = () => {
  const {id} =useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  useEffect(()=>{
    axios.get(`https://localhost:44376/api/Product/${id}`)
    .then(response => {
       setProduct(response.data);
    })
},[] );
  const handleUpdateproduct = (formData) => {
    axios.put(`https://localhost:44376/api/Product/${id}`, formData)
        .then((respose) => {
            navigate(-1);
        })
  }
  return (
    <div>
      <ProductForm onSubmitData={handleUpdateproduct} productData={product}/>
    </div>
  )
}

export default UpdateProduct