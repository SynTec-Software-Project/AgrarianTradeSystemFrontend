import React from 'react'
import { Button } from "@material-tailwind/react";
import { MdMargin } from 'react-icons/md';
import { BsGrid3X3Gap } from 'react-icons/bs';

const review=[
    {
        category: 'vegitable',
        productName:'Leeks 1kg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'


    }
]


export const AddReviewCard = () => {
 
  return (          
    <>
    <div className=' bg-white px-8 py-5 rounded-lg my-2'>
        <div className=' mb-5'>
            <h1 className='my-2'>Vegitable Gallery </h1>
            <p>Purches date 01/04/2024</p>
        </div>
        <div className=' flex w-full gap-4 items-end'>
            <img src="https://1.bp.blogspot.com/-9zP_jm8uVmc/WRruNnx2RsI/AAAAAAAAAKU/uXJQQzdPX2kQlJCvIlChiIUXkDcgQ-YcACLcB/s1600/2.jpg" 
            alt="" className=' w-[160px] h-[150px]'/>
             
             <div className='w-full px-3'>
                <h1 className=' font-semibold text-gray-800 text-lg my-3'>Leeks 1kg</h1>
                <p className='text-blue-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, libero optio voluptate accusantium temporibus quis aperiam soluta nihil est magnam omnis, 
                    aliquam architecto necessitatibus quaerat delectus eveniet in totam quos.
                </p>
             </div>

             <div className='items-end my-8'>
                 <Button className="color bg-green-400"  >Review</Button>
             </div>
        </div>
            
    </div>
    </>
  )

}
