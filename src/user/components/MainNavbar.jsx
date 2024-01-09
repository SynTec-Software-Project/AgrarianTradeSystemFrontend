import React, { useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCoin } from "react-icons/bs";
import { Badge, IconButton, Avatar } from "@material-tailwind/react";
import { HomeIcon ,ShoppingCartIcon } from "@heroicons/react/24/solid";
import SearchBar from "./SearchBar";

const MainNavbar = () => {
    const [open, setOpen] = useState(false);

  return (
    <>
       <header  className="flex w-full items-center justify-between bg-green-50 dark:bg-dark">
            
                    <div>
                        {/* logo section */}
                        <div className="w-50 max-w-full px-4 ">
                            <a href="/#" className="block w-full">
                                <img
                                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
                                alt="logo"
                                className="dark:hidden"
                                />
                            </a>
                        </div>

                    </div>
                    <div className="flex-col items-start w-1/3">             
                                {/* nsv link section */}
                                <div>
                                    <nav
                                        // :className="!navbarOpen && 'hidden' "
                                        id="navbarCollapse"
                                        className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg pr-3 py-3 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                                            !open && "hidden"
                                        } `}
                                        >
                                        <ul className="block lg:flex">
                                            <ListItem NavLink="/#">Home</ListItem>
                                            <ListItem NavLink="/#">About</ListItem>
                                            <ListItem NavLink="/#">Blog</ListItem>
                                            <ListItem NavLink="/#">Blog</ListItem>
                                        </ul>
                                        </nav>
                                 </div>
                                 <SearchBar/>     
                          
                    </div>
                    <div>
                            <div>
                                {/* seller/courier link section */}
                                <ul className="block  lg:flex  justify-end pr-4 text-primary">
                                    <ListItem NavLink="/#"><BsCoin size={24} className=" mx-2" />Become a Seller</ListItem>
                                    <ListItem NavLink="/#"><TbTruckDelivery size={25} className=" mx-2"/>Delivery Partner</ListItem>

                                  </ul>
                            </div>
                            <div>
                                {/* login/signup */}
                                <div className="py-3 ">
                            <div className="flex w-full items-center justify-between px-4">
                                <div className="hidden justify-end pr-16 gap-3 sm:flex lg:pr-0 items-center ">
                                      <Badge content="5" color="green" className="mx-3">
                                          <IconButton color="gray" variant="outlined" className="rounded-full">
                                            <ShoppingCartIcon className="h-3 w-3" />
                                          </IconButton>
                                      </Badge>
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
                   
       </header>
    </>
  )
}

export default MainNavbar;

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
  