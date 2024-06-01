import React, { useState } from 'react';

const paragraStyles = {
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box',
};
import ImageModal from './components/ImageModal';
import ImageGallery from './components/ImageGallery';
import RPDCard from './components/reviews/reuseble seller/RPDCard';
import ReturnFormCard from '@/pages/SellerDashboard/dashboard/components/reviews/reuseble seller/ReturnFormCard';


export function NewOrders() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
 

  const [returnImgs, setReturnImgs] = useState([
    "https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220",
  ])
  const data = [
    {
      CN: "Methsara",
      CA: "Kurunagala",
      CCN: "0713600779",
      OID: "214059"
    }

  ]
  const B = [
    {
      BaN: "BOC",
      BRN: "Kurunegala",
      ACN: "1234556778908",
      ACNO: "595425248589"
    }

  ]
 

  return (
    <>
      <ReturnFormCard/>
    </>  
    
  );
}

export default NewOrders;
