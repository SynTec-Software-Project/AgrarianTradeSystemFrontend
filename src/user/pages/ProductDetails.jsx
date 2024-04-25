import React from 'react'
import MainNav from '../components/MainNav'
import { FaLocationDot } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import {
  Rating,
  Alert
} from "@material-tailwind/react";
import ProductQuantity from '../components/ProductQuantity';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DeliveryFee from '@/courier/components/DeliveryFee';
import { set } from 'date-fns';
import SellerDetails from '../components/SellerDetails';
import PlaceOrderModal from '../components/PlaceOrderModal';
function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const buyerID = 'rashmina@email.com';
const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [destination , setDestination] = useState('');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successOrder, setSuccessOrder] = useState(false);
  const { id } = useParams();
  const [modelOpen, setModelOpen] = useState(false);
  useEffect(() => {
    axios.get(`https://localhost:44376/api/Product/details/${id}`)
      .then(response => {
        setProduct(response.data);
      })
  }, []);

  const handleModalOPen = () => {
    // if (deliveryFee === 0) {
    //   alert('Please set the delivery location');
    // }
    // else {
    //   modelOpen ? setModelOpen(false) :
    //     setModelOpen(true);
    // }
    modelOpen ? setModelOpen(false) :
      setModelOpen(true);
  };

  const handleSelectDestination = (destination) => {
    setDestination(destination);
  }

  const handleDeliveryFee = (fee) => {
    setDeliveryFee(fee);
  }

  const handleSuccessOrder = (success) => {
    setSuccessOrder(success);
  }

  const addToCart = (productId) => {
    setLoading(true);
    var cart = {
      buyerId: buyerID,
      productId: productId,
      quantity: selectedQuantity
    }
    axios.post("https://localhost:44376/api/ShoppingCart/add-to-cart", cart)
      .then((respose) => {
        setOpen(true);
        setLoading(false);
      })
  };

  const handleQuantityChange = (newQuantity) => {
    setSelectedQuantity(newQuantity);
  };
  if (product.length === 0) {
    return <div>Loading...</div>
  }
  return (
    <div className=' bg-secondary'>
      <MainNav />
      <Alert
        icon={<Icon />}
        open={open}
        onClose={() => setOpen(false)}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
        className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946] max-w-2xl mx-12"
      >
        Your item has been successfully added to the cart! <Link to="/cart" className="text-primary font-bold underline ml-2">View cart</Link>
      </Alert>
      <Alert
        icon={<Icon />}
        open={successOrder}
        onClose={() => setSuccessOrder(false)}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
        className="rounded-none border-l-4 border-[#ee7f25] bg-[#c9812e]/10 font-medium text-[#ee7f25] max-w-2xl mx-12"
      >
        Your order has been successfully placed! <Link to="/buyers/my-orders" className="text-[#ff9f50] font-bold underline ml-2">View My Orders</Link>
      </Alert>
      <PlaceOrderModal
        open={modelOpen}
        setOpen={setModelOpen}
        product={product}
        selectedQuantity={selectedQuantity}
        deliveryFee={deliveryFee}
        destination={destination}
        setSuccessOrder={handleSuccessOrder}
        
      />
      <div className=' grid grid-cols-4 px-8 gap-4'>
        <div className=' col-span-3 h-auto bg-white rounded-md border-gray-100'>

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
                    <Rating value={4} readonly />
                    <p className=' text-sm text-gray-700'>Reviews (4)</p>
                  </div>
                </div>
                <p className=' flex items-center gap-3 font-semibold text-gray-600 text-lg'><span><FaLocationDot /></span>{product.farmerAddL3}</p>
              </div>
              {/* product description */}
              <div className=' my-3'>
                <p className=' text-gray-700'>{product.productDescription}</p>
              </div>
              {/* product price */}
              <div>
                <h1 className=' text-primary text-2xl font-semibold'>Rs.{product.unitPrice.toFixed(2)}</h1>
              </div>

              {/* product quantity */}
              <div>
                <h1 className='mt-8 mb-4 text-gray-800 text-sm'>Select Quantity :</h1>
                <ProductQuantity minimumQuantity={product.minimumQuantity} availableStock={product.availableStock} onQuantityChange={handleQuantityChange} />
              </div>
              <div className='flex gap-3 justify-end mt-8'>
                <button className='bg-transparent border-primary border rounded-full inline-flex items-center 
                                      justify-center py-2 px-8 text-center text-sm font-medium  text-primary
                                      disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'
                  onClick={() => { handleModalOPen() }}
                >
                  Buy Now
                </button>

                <button className='bg-primary border-primary border rounded-full inline-flex items-center 
                                      justify-center py-2 px-7 text-center text-sm font-medium   text-white hover:bg-primary/90
                                      disabled:bg-gray-300 disabled:border-gray-300 disabled:text-dark-500' disabled={loading}

                  onClick={() => { addToCart(id) }}
                >
                  {loading ? 'Adding to cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>

        </div>
        {/* courier charges section */}
        <div>
          <DeliveryFee originData={product.farmerAddL3 + ', Sri Lanka'} handleDeliveryFee={handleDeliveryFee}  handleSelectDestination={handleSelectDestination}/>
          <SellerDetails
            farmerFName={product.farmerFName}
            farmerLName={product.farmerLName}
            farmerAddL1={product.farmerAddL1}
            farmerAddL2={product.farmerAddL2}
            farmerAddL3={product.farmerAddL3}
            farmerContact={product.farmerContact}
            farmerProfileUrl={product.farmerProfileUrl}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductDetails