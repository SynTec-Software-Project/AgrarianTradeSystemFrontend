import React from 'react'
import { useNavigate } from 'react-router-dom';
import SellerReviewCard from './components/reviews/components/SellerReviewCard';

const data=[
  {
      type:'Vegetable Gallery',
      pDate:'Purchased on 16 Dec 2023',
      img:'https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220',
      iType:'Leeks Stock-500kg',
      Button:'View',
  },
  {
      type:'Vegetable Gallery',
      pDate:'Purchased on 16 Dec 2023',
      img:'https://purepng.com/public/uploads/large/purepng.com-carrotscarrotvegetablesfreshdeliciousefoodhealthycarrots-481521740717jmglq.png',
      iType:'Leeks Stock-500kg',
      Button:'View',
  },
  {
      type:'Vegetable Gallery',
      pDate:'Purchased on 16 Dec 2023',
      img:'https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/pumpkin.jpg?itok=IXGgRg1X',
      iType:'Leeks Stock-500kg',
      Button:'View',
  }
  
  
  ]

export function MyReviews() {
  const navigate = useNavigate();
  return (
    <>
    <div className='bg-white rounded-lg px-8 py-2'>
        <h1 className='text-[#00000082]'> View Reviws </h1>
    </div>

    {data.map((item,index)=>(
      <SellerReviewCard
      key={index}
      type={item.type}
      pDate={item.pDate}
      iType={item.iType}
      Button={item.Button}
      img={item.img}
      />
    ))}
    </>
 
 
  );
}

export default MyReviews;