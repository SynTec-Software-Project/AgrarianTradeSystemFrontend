import React from 'react'
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import ReviewCard from '@/reuseble seller/ReviewCard';

const data=[
{
    type:'Vegetable Gallery',
    pDate:'Purchased on 16 Dec 2023',
    img:'https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220',
    iType:'Leeks Stock-600kg',
    Button:'Review',
},
{
    type:'Vegetable Gallery',
    pDate:'Purchased on 16 Dec 2023',
    img:'https://purepng.com/public/uploads/large/purepng.com-carrotscarrotvegetablesfreshdeliciousefoodhealthycarrots-481521740717jmglq.png',
    iType:'Carrot Stock-500kg',
    Button:'Review',
},
{
    type:'Vegetable Gallery',
    pDate:'Purchased on 16 Dec 2023',
    img:'https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/pumpkin.jpg?itok=IXGgRg1X',
    iType:'Pumpking Stock-1000kg',
    Button:'Review',
}


]



export const AddReviewCard = () => {
    const navigate = useNavigate();
  return (          
    <>
    
    {data.map((item,index)=>(
      <ReviewCard
      key={index}
      type={item.type}
      iType={item.iType}
      Button={item.Button}
      img={item.img}
      />
    ))}
    </>
    
  )

}
