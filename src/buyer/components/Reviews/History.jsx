import React from 'react';
import { Button } from "@material-tailwind/react";
import { Rating } from "@material-tailwind/react";


export function DefaultRating() {
  return <Rating value={4} />;
}

const History = () => {
  return (
    <>
      <div className='bg-white px-8 py-5 rounded-lg my-2 pb-1'>
        <div className='mb-5'>
          <h1 className='my-2'>Vegetable Gallery </h1>
          <p>Purchase date 01/04/2024</p>
        </div>
        <div className='flex w-full gap-4 items-end'>
          <img src="https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220" 
            alt="" className='w-[160px] h-[120px]'/>
          
          <div className='w-full px-3'>
            <h1 className='font-semibold text-gray-800 text-lg my-3'>Leeks 1kg</h1>
            <p className='text-blue-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, libero optio voluptate accusantium temporibus quis aperiam soluta nihil est magnam omnis, 
              aliquam architecto necessitatibus quaerat delectus eveniet in totam quos.
            </p>

            
          </div>
        </div>
        
        <div className='flex'>
          <div className='pr-13 mr-44 py-2'>
            <DefaultRating />
          </div>
          
          <div className='ml-12 '>
            
            <Button className="color bg-green-400 mx-96 ">Edit</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default History;
