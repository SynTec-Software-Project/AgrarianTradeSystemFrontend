import React, { useRef, useState } from 'react'
import { Select, Option } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import { Radio, Typography } from "@material-tailwind/react";
import { Hint, Title } from './Hint';
import { BsX } from "react-icons/bs";
import { Button } from "@material-tailwind/react";
import axios from 'axios';
import { FaUpload, FaRegFileImage, FaRegFile } from "react-icons/fa";
import Swal from 'sweetalert2'

function showUploading() {
  let timerInterval;
  Swal.fire({
    title: "Auto close alert!",
    html: "I will close in <b></b> milliseconds.",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
}
const AddProductForm = () => {
  // get user inputs
  const [uploadedFileName, setUploadedFileName] = useState('');
  const productTitleRef = useRef(null);
  const productDescriptionRef = useRef(null);
  const unitPriceRef = useRef(null);
  const availableStockRef = useRef(null);
  const minimumQuantityRef = useRef(null);
  const dateCreatedRef = useRef(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const [selectedProductType, setSelectedProductType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);



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




  // const handleUpload = async () => {
  //   try {
  //     setLoading(true);
  //     const formData = new FormData();
  //     formData.append('ProductImageFile', selectedFile);

  //     const response = await axios.post('https://localhost:44376/api/File/upload', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }

  //     });
  //     // Set the uploaded filename received from the server response
  //     setUploadedFileName(response.data);
  //     console.log("file uploaded");
  //     setLoading(false);

  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //   }
  // };

  function addProducts() {
    setLoading(true);
    const formData = new FormData();
    formData.append('file', fileInputRef.current.value);
    formData.append('productTitle', productTitleRef.current.value);
    formData.append('productDescription', productDescriptionRef.current.value);
    formData.append('unitPrice', unitPriceRef.current.value);
    formData.append('availableStock', availableStockRef.current.value);
    formData.append('minimumQuantity', minimumQuantityRef.current.value);
    formData.append('dateCreated', dateCreatedRef.current.value);
    formData.append('productType', selectedProductType);
    formData.append('category', selectedCategory);

    axios.post('https://localhost:44376/api/product', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        console.log('Product added:', response.data);
        setLoading(false);
        navigate(-1);
        // Add your logic here after successful product addition
      })
      .catch(error => {
        console.error('Error adding product:', error);
        // Handle error
      });
  }


  // function addProducts() {
  //   console.log(uploadedFileName);
  //   var product = {
  //     productTitle: productTitleRef.current.value,
  //     productDescription: productDescriptionRef.current.value,
  //     productImage: uploadedFileName,
  //     productType: selectedProductType,
  //     category: selectedCategory,
  //     unitPrice: unitPriceRef.current.value,
  //     availableStock: availableStockRef.current.value,
  //     minimumQuantity: minimumQuantityRef.current.value,
  //     dateCreated: dateCreatedRef.current.value,
  //   }
  //   axios.post("https://localhost:44376/api/product", product)
  //     .then((respose) => {
  //       navigate(-1);
  //     })
  // }

  var vegetables = [
    { value: "artichoke", label: "Artichoke" },
    { value: "asparagus", label: "Asparagus" },
    { value: "bell-pepper", label: "Bell Pepper" },
    { value: "broccoli", label: "Broccoli" },
    { value: "cabbage", label: "Cabbage" },
    { value: "carrot", label: "Carrot" },
    { value: "celery", label: "Celery" },
    { value: "cucumber", label: "Cucumber" },
    { value: "kale", label: "Kale" },
    { value: "leek", label: "Leek" },
    { value: "potato", label: "Potato" },
    { value: "spinach", label: "Spinach" },
    { value: "sweet-potato", label: "Sweet Potato" },
    { value: "tomato", label: "Tomato" },
    { value: "green-beans", label: "Green Beans" }
  ];

  var fruits = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
    { value: "strawberry", label: "Strawberry" },
    { value: "grape", label: "Grape" },
    { value: "watermelon", label: "Watermelon" },
    { value: "kiwi", label: "Kiwi" },
    { value: "pineapple", label: "Pineapple" },
    { value: "mango", label: "Mango" },
    { value: "pear", label: "Pear" }
  ];

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
    console.log(selectedFile);
  };


  return (

    <div>
      <div className="relative my-4 py-10 flex flex-col text-gray-700 bg-white shadow-none rounded-xl bg-clip-border ">
        <form className="max-w-screen-lg mt-8 ml-8 mb-2 w-80 sm:w-96">
          <div className="flex flex-col gap-6 mb-1">

            {/* title*/}
            <div>
              <div className=' flex'>
                <Title title='Product Title' />
              </div>
              <input type="text" id="number-input" aria-describedby="helper-text-explanation"
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder="Title" required
                ref={productTitleRef}
              >
              </input>
            </div>

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
              <Radio name="type"
                value="vegetable"
                checked={selectedProductType === 'vegetable'}
                onChange={handleProductTypeChange}
                label={
                  <Typography
                    color="blue-gray"
                    className="font-normal text-blue-gray-700"
                  >
                    Vegitable
                  </Typography>
                }
                defaultChecked
              />
              <Radio name="type"
                value="fruit"
                checked={selectedProductType === 'fruit'}
                onChange={handleProductTypeChange}

                label={
                  <Typography
                    color="blue-gray"
                    className="font-normal text-blue-gray-700"
                  >
                    Fruit
                  </Typography>
                }
              />
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

            <div className="flex items-center justify-center w-full">
              <div className='flex p-4 flex-col items-center justify-center w-full h-auto border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100'>
                <label
                  htmlFor="dropzone-file"
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      PNG or JPG  (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                  />

                </label>
                {selectedFile ? (
                  <div className='-mt-12'>
                    <div className=" bg-secondary w-full px-4 py-2 rounded-lg">
                      <h2 className="my-4 text-sm text-gray-700" >Selected File:</h2>
                      <div
                        className="text-gray-500 text-[17px] cursor-pointer"
                        onClick={handleRemoveFile}
                      >
                        <BsX className="ml-auto text-red-700 " size={24} />
                        <img src={URL.createObjectURL(selectedFile)} alt="Selected file" className='w-[150px] rounded-md' />
                        <span className='text-sm'>{selectedFile.name}</span>

                      </div>
                    </div>
                    
                  </div>

                ) : null}

              </div>

            </div>

            {/* select quantity */}
            <div>
              <div className=' flex'>
                <Title title='Select Quantity' />
                <Hint title='Hint !' hint='Enter the amount of available stock you have in kg' />
              </div>
              <input type="number" id="number-input" aria-describedby="helper-text-explanation"
                class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder="Available Stock"
                ref={availableStockRef}
              >
              </input>
            </div>

            {/* select minimum order */}
            <div>
              <div className=' flex'>
                <Title title='Minimum Order Quantity' />
                <Hint title='Hint !' hint='Enter the minimum quantity that customer can purchase' />
              </div>

              <input type="number" id="number-input" aria-describedby="helper-text-explanation"
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder="Minimum Order Quantity" required
                ref={minimumQuantityRef}
              >
              </input>
            </div>

            {/* select price */}
            <div>
              <div className=' flex'>
                <Title title='Select Price' />
                <Hint title='Hint !' hint='Price should be per 1kg' />
              </div>

              <input type="number" id="number-input" aria-describedby="helper-text-explanation"
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder="Unit Price" required
                ref={unitPriceRef}
              >
              </input>
            </div>

            {/* submit button */}
            <div className="flex gap-4 justify-end" >
              < Button color="green" variant='gradient' onClick={addProducts} disabled={loading}>
                {loading ? 'Uploading...' : 'Add Product'}
              </Button>
              <Button color="green" variant="outlined">Cancel</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProductForm