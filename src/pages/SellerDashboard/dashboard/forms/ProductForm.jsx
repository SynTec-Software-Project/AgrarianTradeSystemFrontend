import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Radio, Typography } from "@material-tailwind/react";
import { InputField, Title } from './FormComponents';
import { Button } from "@material-tailwind/react";
import axios from 'axios';
import Swal from 'sweetalert2'
import { fruits, productTypes, vegetables } from '@/data/product-type-data';
import FileUpload from './FileUpload';

const ProductForm = () => {
  // get user inputs
  const productTitleRef = useRef(null);
  const productDescriptionRef = useRef(null);
  const unitPriceRef = useRef(null);
  const availableStockRef = useRef(null);
  const minimumQuantityRef = useRef(null);
  const [selectedProductType, setSelectedProductType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const filesavedPopup = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your product has been Uploaded",
      showConfirmButton: false,
      timer: 1500
    });
  }
  // category selection functions
  const handleProductTypeChange = (event) => {
    const value = event.target.value;
    setSelectedProductType(value);
    console.log(value);

    setSelectedCategory('');
  };
  const handleCategoryChange = (event) => {
    if (event && event.target) {
      setSelectedCategory(event.target.value);
      console.log(event.target.value);
    }
  };

  //upload product function
  function addProducts() {
    setLoading(true);
    const formData = new FormData();
    formData.append('productTitle', productTitleRef.current.value);
    formData.append('productDescription', productDescriptionRef.current.value);
    formData.append('unitPrice', unitPriceRef.current.value);
    formData.append('availableStock', availableStockRef.current.value);
    formData.append('minimumQuantity', minimumQuantityRef.current.value);
    formData.append('productType', selectedProductType);
    formData.append('category', selectedCategory);
    formData.append('file', selectedFile);
    axios.post('https://localhost:44376/api/product', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        console.log('Product added');
        setLoading(false);
        filesavedPopup();
        navigate(-1);
      })
      .catch(error => {
        console.error('Error adding product:', error);
      });
  }

  //file input functions
  const handleDragOver = (event) => {
    event.preventDefault();
    event.target.classList.add('border-blue-500');
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.target.classList.remove('border-blue-500');
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.target.classList.remove('border-blue-500');

    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
    console.log('Selected file:', file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

 

  return (
    <div>
      <div className="relative my-4 py-10 flex flex-col text-gray-700 bg-white shadow-none rounded-xl bg-clip-border ">
        <form className="max-w-screen-lg mt-8 ml-8 mb-2 w-80 sm:w-96">
          <div className="flex flex-col gap-6 mb-1">

            {/* title*/}
            <InputField
              title='Product Title'
              type='text'
              reference={productTitleRef}
              placeholder="Title"
              hint='Enter your Product Name'
            />
            {/* description*/}
            <div className="w-96">
              <Title title="Description"></Title>
              <div class="relative w-full min-w-[200px]">
                <textarea
                  className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  ref={productDescriptionRef}
                ></textarea>

                <label
                  className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Description
                </label>
              </div>
            </div>

            {/* select type  */}
            <Title title="Select Product Type"></Title>
            <div className="flex gap-10 -mt-4">
              {productTypes.map(type => (
                <Radio
                  key={type.value}
                  name="type"
                  value={type.value}
                  checked={selectedProductType === type.value}
                  onChange={handleProductTypeChange}
                  label={
                    <Typography
                      color="blue-gray"
                      className="font-normal text-blue-gray-700"
                    >
                      {type.label}
                    </Typography>
                  }
                />
              ))}
            </div>

            {/* select category */}
            <Title title="Select Category"></Title>
            <div className="w-full">
              <select label={'Select ' + selectedProductType} value={selectedCategory} onChange={handleCategoryChange}
                className='overflow-y-scroll
               h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 bg-gray-50 focus:ring-blue-500
               block  p-2.5'
              >
                {selectedProductType === 'vegetable' ? (
                  <>
                    {vegetables.map((v) => (
                      <option key={v.value} value={v.value}>{v.label}</option>
                    ))}
                  </>
                ) : selectedProductType === 'fruit' ? (
                  <>
                    {fruits.map((v) => (
                      <option key={v.value} value={v.value}>{v.label}</option>
                    ))}
                  </>
                ) : null}
              </select>
            </div>

            {/* upload product image */}
            <Title title='Upload Product Image' />
            <FileUpload
                 handleDragOver ={handleDragOver}
                 handleDragLeave ={handleDragLeave}
                 handleDrop ={handleDrop}
                 handleFileChange ={handleFileChange}
                 handleRemoveFile ={handleRemoveFile}
                 selectedFile = {selectedFile}
            />

            {/* select quantity */}
            <InputField
              title='Select Quantity'
              type='number'
              reference={availableStockRef}
              placeholder="Available Stock"
              hint='Enter the amount of available stock you have in kg'
            />

            {/* select minimum order */}
            <InputField
              title='Minimum Order Quantity'
              type='number'
              reference={minimumQuantityRef}
              placeholder="Minimum Order Quantity"
              hint='Enter the minimum quantity that customer can purchase'
            />

            {/* select price */}
            <InputField
              title='Select Price'
              type='number'
              reference={unitPriceRef}
              placeholder="Unit Price"
              hint='Price should be per 1kg'
            />

            {/* submit button */}
            <div className="flex gap-4 justify-end" >
              < Button color="green" variant='gradient' onClick={addProducts} disabled={loading}>
                {loading ? 'Uploading...' : 'Add Product'}
              </Button>
              <Button color="green" variant="outlined" onClick={() => navigate(-1)}>Cancel</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm