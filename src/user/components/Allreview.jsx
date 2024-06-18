import React from 'react';
import { Rating } from '@material-tailwind/react';
import ImageGallery from '../../seller/SellerDashboard/dashboard/components/ImageGallery';
import ImageModal from '../../seller/SellerDashboard/dashboard/components/ImageModal';

const AllReview = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const returnImgs = [
    "https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220",
  ];

  return (
    
    <div>
        <hr className='pt-11'></hr>
      <div className='flex '>
        <div>
          <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" alt="" className='w-[50px] h-auto rounded-[20px] py-2 ml-1' />
        </div>
        <div className='ml-1'>
          <p>Emma Robet</p>
          <p className='text-blue-gray-400'>14 February 2023</p>
        </div>
        <div className='ml-8'>
          <Rating value={4} />
        </div>
        <p className='ml-96 text-blue-gray-800'>2 years ago...</p>
      </div>
      <div className='pt-4 mr-24'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae corrupti totam labore, eveniet tenetur alias pariatur praesentium ducimus unde mollitia. Natus dolore optio ullam quisquam totam eligendi repellat illo neque?
      </div>
      <div className='pt-9'>
        <ImageModal images={returnImgs} open={open} setOpen={setOpen} />
        <ImageGallery returnImgs={returnImgs} handleOpen={handleOpen} />
      </div>
    </div>
  );
};

export default AllReview;
