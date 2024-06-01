import React from 'react'
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

const ReviewCard = (props) => {
  const navigate = useNavigate();
  return (
    <div>    <div className=' bg-white px-8 py-5 rounded-lg my-2'>
      <div className=' mb-5'>
        <h1 className='my-2'>{props.type}</h1>
        <p>{props.pDate}</p>
      </div>
      <div className=' flex w-full gap-4 items-center'>
        <img src={"https://syntecblobstorage.blob.core.windows.net/products/" + props.img} alt={props.type}
          className=' w-[160px] h-[150px]' />

        <div className='w-full px-3'>
          <h1 className=' font-semibold text-gray-800 text-lg my-3'>{props.iType}</h1>
          <p className='text-blue-gray-500'>
            {props.description}
          </p>
        </div>

        <div className='items-end my-8'>
          <Button className="color bg-green-400" onClick={() => navigate('/' + props.productId + "/" + props.id)} >{props.Button}</Button>
        </div>
      </div>

    </div></div>
  )
}

export default ReviewCard