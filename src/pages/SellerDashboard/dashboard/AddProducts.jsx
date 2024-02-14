import React from 'react'
import ProductForm from './forms/ProductForm'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
const filesavedPopup = () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Your product has been Uploaded",
    showConfirmButton: false,
    timer: 1500
  });
}

const AddProducts = () => {
  const navigate = useNavigate();
  const handleSubmit = (formData) => {
    axios.post('https://localhost:44376/api/product', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        console.log('Product added')
        filesavedPopup();
        navigate(-1);
      })
      .catch(error => {
        console.error('Error adding product:', error);
      });
  }
  return (
    <div><ProductForm onSubmitData={handleSubmit} productData={null} /></div>
  )
}

export default AddProducts