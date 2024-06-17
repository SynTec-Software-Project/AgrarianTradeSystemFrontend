import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReviewCard from '@/seller/SellerDashboard/dashboard/components/reviews/components/ReviewCard';
import { getProductsToReview, getReviewHistory } from '@/services/reviewServices';

export const AddReviewCard = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  const [historyData, setHistoryData] = useState([]);
  // const fetchProducts = async () => {
  //   const client = axios.create({
  //     baseURL: "https://localhost:44376/api/Review/to-review"
  //   });

  //   try {
  //     client.get().then((response) => {
  //       setProductData(response.data)
  //       // console.log(response)
  //     })
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   // console.log(data);
  // }

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  const fetchProducts = async () => {
    try {
      const [productsToReview, reviewHistory] = await Promise.all([
        getProductsToReview(),
        getReviewHistory()
      ]);

      setProductData(productsToReview);
      setHistoryData(reviewHistory);
    } catch (error) {
      console.error('Error fetching products or history:', error);
      // Handle errors appropriately, e.g., show a notification to the user
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); // Fetch only once when the component mounts


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
