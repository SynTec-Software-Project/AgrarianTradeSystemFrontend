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
    try {
    axios.put(`https://localhost:44376/api/Product/update/${id}`, formData)
        .then((respose) => {
            navigate(-1);
        })
      } catch (error) {
        console.log(error);
      }
  }

  const handleupdateImage = (file) => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      axios.put(`https://localhost:44376/api/Product/update-image/${id}`, formData)
          .then((respose) => {
              console.log('Image Updated')
          })
        } catch (error) {
          console.log(error);
        }
  }
  return (
    <div>
      <ProductForm onSubmitData={handleUpdateproduct} productData={product} isUpdate={true} handleupdateImage={handleupdateImage}/>
    </div>
  )
}

export default UpdateProduct