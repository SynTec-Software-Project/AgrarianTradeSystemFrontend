import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';


const MyReviews = () => {
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
          To Review (4)
        </NavLink>

        <NavLink to='history' style={NavLinkStyles}>
          History
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};




export default MyReviews;