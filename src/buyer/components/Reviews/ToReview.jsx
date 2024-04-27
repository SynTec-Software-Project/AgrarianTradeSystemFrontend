import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ReviewCard from '@/reuseble seller/ReviewCard';
import axios from 'axios';

export const AddReviewCard = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);

  const fetchProducts = async () => {
    const client = axios.create({
      baseURL: "https://localhost:7144/api/Review/to-review"
    });

    try {
      client.get().then((response) => {
        setProductData(response.data)
        // console.log(response)
      })
    } catch (error) {
      console.log(error);
    }
    // console.log(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>

      {productData.map((item, index) => (
        <ReviewCard
          key={index}
          id={item.orderID}
          productId={item.productID}
          type={item.productType}
          iType={item.productName}
          Button={"Review"}
          img={item.productImageUrl}
          description={item.productDescription}
          stock={item.availableStock}
        />
      ))}
    </>

  )

}
