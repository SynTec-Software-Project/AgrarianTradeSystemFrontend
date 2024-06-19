import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReviewCard from '@/seller/SellerDashboard/dashboard/components/reviews/components/ReviewCard';
import { getProductsToReview, getReviewHistory } from '@/services/reviewServices';
import { BUYER_ID } from '@/usersID';

export const AddReviewCard = () => {
  const buyerId = BUYER_ID;

  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  const [historyData, setHistoryData] = useState([]);

  const fetchProducts = async () => {
    try {
      const productsToReview = await getProductsToReview(buyerId);

      console.log(productsToReview);

      setProductData(productsToReview);
      // setHistoryData(reviewHistory);
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
          pDate={item.orderedDate?.split("T")[0]}
          quantity={item.totalQuantity}
        />
      ))}
    </>

  )

}
