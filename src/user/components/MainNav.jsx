import React, { useState } from "react";

const MainNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
    <header className="flex w-full items-center bg-green-50 dark:bg-dark">
      <div className="container">
        <div className="relative -mx-4 items-center justify-between grid grid-cols-2">
          <div className="w-50 max-w-full px-4">
            <a href="/#" className="block w-full">
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
                alt="logo"
                className="dark:hidden"
              />
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                alt="logo"
                className="hidden dark:block"
              />
            </a>
          </div>
        <div className="grid grid-rows-2 py-2">
    {/* Upper  nav */}
        
            <div>
                <ul className="block lg:flex justify-end pr-4 text-primary">
                  <ListItem NavLink="/#">Become a Seller</ListItem>
                  <ListItem NavLink="/#">Delivery Partner</ListItem>
        
                </ul>
            </div>
        
          {/* lower nav */}
    <div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg px-6 py-3 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="/#">Home</ListItem>
                  <ListItem NavLink="/#">Payment</ListItem>
                  <ListItem NavLink="/#">About</ListItem>
                  <ListItem NavLink="/#">Blog</ListItem>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 gap-3 sm:flex lg:pr-0">
            <button className='bg-transparent border-primary border rounded-full inline-flex items-center 
            justify-center py-2 px-8 text-center text-sm font-medium  text-primary
            disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
                   Login
            </button>

            <button className='bg-primary border-primary border rounded-full inline-flex items-center 
            justify-center py-2 px-7 text-center text-sm font-medium   text-white hover:bg-primary/90
            disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
                   Sign Up
            </button>
            </div>
            </div>
    </div>
        

        </div>
        </div>
      </div>
    </header>
    </div>
  );
};

export default MainNav;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-0 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
