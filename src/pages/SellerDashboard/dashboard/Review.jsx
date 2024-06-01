import React, { useState } from 'react';
import NormalReviewCard from '@/pages/SellerDashboard/dashboard/components/reviews/reuseble seller/NormalReviewCard';
import { Rating } from "@material-tailwind/react";
import ImageModal from './components/ImageModal';
import ImageGallery from './components/ImageGallery';
import {
  Button,
} from "@material-tailwind/react";
import PopupBox from '@/pages/SellerDashboard/dashboard/components/reviews/reuseble seller/PopupBox';

const paragraStyles = {
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box',
};

const data = [
  {
    type: 'Vegetable Gallery',
    pDate: 'Purchased on 16 Dec 2023',
    img: "https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220",
    diliDate: 'Returned on 16 Dec 2023',
    iType: 'Leeks Stock-500kg',
    rq: 'Returned Quantity - 100kg',
    cof: 'Amount Returned Quantity - Ru.10000.00',
    Button: 'View'
  }
];

const Review = () => {
  const [open, setOpen] = React.useState(false);
  const [popupOpen, setPopupOpen] = React.useState(false);
  const [ isSubmited, setIsSubmited ] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handlePopupOpen = () => setPopupOpen(true);

  const handlePopupSubmit = () =>{
    console.log("submited");
    setPopupOpen(false);
    setIsSubmited(true);
  }

  const DefaultRating = () => {
    return <Rating value={4} />;
  };

  const [returnImgs, setReturnImgs] = useState([
    "https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220",
  ]);


  return (
    <>
      <PopupBox
      open={popupOpen}
      setOpen={setPopupOpen}
      handleSubmit={handlePopupSubmit}
      />
      <div>

        <div className='bg-white rounded-lg px-8 py-2 '>
          <h1 className='text-[#00000082]'> Reply Reviews</h1>
        </div>
        <div className='bg-white rounded-lg'>
          {data.map((item, index) => (
            <NormalReviewCard
              key={index}
              type={item.type}
              pDate={item.pDate}
              iType={item.iType}
              img={item.img}
            />
          ))}
          <hr className='py-2' />
          <div className='flex'>
            <div>
              <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" alt="" className='w-[50px] h-auto rounded-[20px] py-2 ml-8' />
            </div>
            <div className='ml-6'>
              <p>Emma Robet</p>
              <p className='text-blue-gray-400'>14 February 2023</p>
            </div>
            <div className='ml-8'>
              <DefaultRating />
            </div>
            <p className='ml-96 text-blue-gray-800'>2 years ago...</p>
          </div>
          <p className='py-5 px-28 text-blue-gray-800' style={{ ...paragraStyles }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit praesentium doloribus hic unde commodi modi voluptas a neque,
            ullam aperiam mollitia alias magnam veniam expedita earum fuga quisquam suscipit rem.
          </p>
          <div className='ml-28'>
            <ImageModal images={returnImgs} open={open} setOpen={setOpen} />
            <ImageGallery returnImgs={returnImgs} handleOpen={handleOpen} />
          </div>
          <div className='flex py-7 ml-52'>
              <div>
              <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" alt="" className='w-[50px] h-auto rounded-[20px] py-2 ml-8' />
            </div>
            <div className='ml-6'>
              <p>Emma Robet</p>
              <p className='text-blue-gray-400'>14 February 2023</p>
            </div>
          </div>
          <p className='ml-80'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>

          <div className=' my-8 flex ml-[750px]'>
            <Button className="color bg-green-400 " onClick={handlePopupOpen} >{isSubmited?"Edit":"Reply"}</Button>
          </div>
        </div>

      </div>
      <div>

      </div>
    </>
  );
}

export default Review;

