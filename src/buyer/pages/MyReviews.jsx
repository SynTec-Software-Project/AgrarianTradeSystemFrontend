import React, {useState, useEffect} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import axios from 'axios';

const MyReviews = () => {
  const [productData, setProductData] = useState([]); 
  const [historyData, setHistoryData] = useState([]);

  const fetchProducts = async () => {
    const client = axios.create({
      baseURL: "https://localhost:7144/api/Review/"
    });

    client.get("to-review").then((response) => {
      setProductData(response.data)
    })

    client.get("get-history").then((response) => {
      setHistoryData(response.data)
    })
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




export default MyReviews;