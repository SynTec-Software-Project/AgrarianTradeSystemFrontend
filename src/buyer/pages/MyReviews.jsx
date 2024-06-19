import React, {useState, useEffect} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import axios from 'axios';
import { getProductsToReview, getReviewHistory } from '@/services/reviewServices';
import { BUYER_ID } from '@/usersID';

const MyReviewsPage = () => {
  const buyer_id = BUYER_ID;

  const [productData, setProductData] = useState([]); 
  const [historyData, setHistoryData] = useState([]);

  const fetchProducts = async () => {
   const productHistory = await getProductsToReview(buyer_id);
   const reviewHistory = await getReviewHistory(buyer_id)

   setProductData(productHistory);
   setHistoryData(reviewHistory);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const NavLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: 'none',
      backgroundColor: isActive ? 'rgb(102 187 106 / var(--tw-bg-opacity))' : 'transparent',
      color: isActive ? 'white' : 'black',
      padding: '3px',
      borderRadius: '8px',  
    };
  };

  return (
    <div>
      <nav className='flex gap-6 bg-white py-1 px-16 rounded-lg'>
        <NavLink to='to-review' style={NavLinkStyles}   >
          To Review ({productData.length})
        </NavLink>
        <NavLink to='history' style={NavLinkStyles}>
          History ({historyData.length})
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};




export default MyReviewsPage;