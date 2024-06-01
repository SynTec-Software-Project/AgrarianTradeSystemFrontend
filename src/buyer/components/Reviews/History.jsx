import React, { useEffect, useState } from 'react';
import { Button } from "@material-tailwind/react";
import { Rating } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function DefaultRating({ value }) {
  return <Rating value={value} />;
}
const History = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    const client = axios.create({
      baseURL: "https://localhost:7144/api/Review/get-history"
    });

    try {
      client.get().then((response) => {
        setReviews(response.data)
        console.log(reviews)
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchReviews();
  }, []);
  return (
    <>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div className='bg-white px-8 py-5 rounded-lg my-2 pb-1'>
            <div className='mb-5'>
              <h1 className='my-2'>Vegetable Gallery </h1>
              <p>Purchase date {review.reviewDate.split('T')[0]}</p>
            </div>
            <div className='flex w-full gap-4 items-end'>
              <img src={"https://syntecblobstorage.blob.core.windows.net/reviews/" + review.reviewImageUrl}
                alt="" className='w-[160px] h-[120px]' />

              <div className='w-full px-3'>
                <h1 className='font-semibold text-gray-800 text-lg my-3'>{review.productTitle}</h1>
                <p className='text-blue-gray-500'>{review.comment}</p>
              </div>
            </div>

            <div className='flex'>
              <div className='pr-13 mr-44 py-2'>
                <DefaultRating value={Math.floor((review.sellerRating + review.deliverRating + review.productRating) / 3)} />
              </div>

              <div className='ml-12 '>

                <Button className="color bg-green-400 mx-96" onClick={() => navigate('/buyers/review/edit/' + review.reviewId + "/" + review.orderID)}  >Edit</Button>
              </div>
            </div>
          </div>)
        )) : <div>Loading...</div>}

    </>
  );
}

export default History;
