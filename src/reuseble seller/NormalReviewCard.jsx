import React from 'react';

const NormalReviewCard = (props) => {
  return (
    <>
      <div>
        <div className='bg-white px-8 py-5 rounded-lg my-2'>
          <div className='mb-5'>
            <h1 className='my-2'>{props.type}</h1>
            <p>{props.pDate}</p>
          </div>
          <div className='flex w-full gap-4 items-end'>
            <img src={props.img} alt='' className='w-[160px] h-[150px]' />

            <div className='w-full px-3 '>
              <h1 className='font-semibold text-gray-800 text-lg py-3 mb-2'>{props.iType}</h1>
              <p className='text-blue-gray-500 mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, libero optio voluptate accusantium temporibus quis aperiam soluta nihil est magnam omnis,
                aliquam architecto necessitatibus quaerat delectus eveniet in totam quos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NormalReviewCard;
