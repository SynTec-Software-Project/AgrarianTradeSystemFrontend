import React from 'react'
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import ReturnCard from './components/reviews/reuseble seller/SellerReturnCard';
import SellerReturnCard from './components/reviews/reuseble seller/SellerReturnCard';


const data=[
{
type:'Vegetable Gallery',
who:'Purchased on 16 Dec 2023',
img:"https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220",
diliDate:'Returned on 16 Dec 2023',
iType:'Leeks Stock-500kg',
rq:'Returned Quantity - 100kg',
cof:'Amount Returned Quantity - Ru.10000.00',
Button:'View'
},
{
  type:'Vegetable Gallery',
  who:'Purchased on 16 Dec 2023',
  img:"https://purepng.com/public/uploads/large/purepng.com-carrotscarrotvegetablesfreshdeliciousefoodhealthycarrots-481521740717jmglq.png",
  diliDate:'Returned on 16 Dec 2023',
  iType:'Leeks Stock-500kg',
  rq:'Returned Quantity - 100kg',
  cof:'Amount Returned Quantity - Ru.10000.00',
  Button:'View'
  },
  {
    type:'Vegetable Gallery',
    who:'Purchased on 16 Dec 2023',
    img:"https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/pumpkin.jpg?itok=IXGgRg1X",
    diliDate:'Returned on 16 Dec 2023',
    iType:'Leeks Stock-500kg',
    rq:'Returned Quantity - 100kg',
    cof:'Amount Returned Quantity - Ru.10000.00',
    Button:'View'
    }


]



export function MyReturns() {
  const navigate = useNavigate();
  return (
    <>
    <div className='bg-white rounded-lg px-8 py-2'>
        <h1 className='text-[#00000082]'> Return product </h1>
    </div>
    {data.map((item,index)=>(
      <SellerReturnCard
      key={index}
      type={item.type}
      who={item.who}
      dili={item.dili}
      diliDate={item.diliDate}
      iType={item.iType}
      rq={item.rq}
      cof={item.cof}
      Button={item.Button}
      img={item.img}
      />
    ))}

    </>
  );
}

export default MyReturns;