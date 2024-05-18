import React, { useEffect, useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCoin } from "react-icons/bs";
import { Badge, IconButton, Avatar } from "@material-tailwind/react";
import { HomeIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import SearchBar from "./SearchBar";
import { Link, useNavigate } from "react-router-dom";
import MainNavSide from "./MainNavSide";
import axios from "axios";
const buyerID = 'rashmina@email.com';
const MainNav = () => {
    const navigate = useNavigate();
    const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
      axios.get(`https://localhost:44376/api/ShoppingCart/items?customerId=${buyerID}`)
      .then((response) => {
         setCartCount(response.data.length);
      });
    }, [cartCount]);
  return (
    <>
      <MainNavSide/>   
      <div className="hidden md:grid grid-cols-4 gap-0 px-4 py-2">  
        <div className="">
          {/* image */}
          <div className="w-50 max-w-full px-8 ">
            <a href="/#" className="block w-full">
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
                alt="logo"
                className="dark:hidden"
              />
            </a>
          </div>
        </div>
        <div className="  md:col-span-3">
          <div className="grid grid-rows-2 ">
            <div>
              {/* delivery */}
              <div className="flex justify-between">
                {/* nsv link section */}

                <ul className="block lg:flex items-start text-sm">
                  <ListItem NavLink="/#">Home</ListItem>
                  <ListItem NavLink="/#">About</ListItem>
                  <ListItem NavLink="/buyers/my-orders">My Orders</ListItem>
                  <ListItem NavLink="/#">Offers</ListItem>
                </ul>
                <ul className="flex  justify-end  text-primary text-sm">
                  <ListItem NavLink="/dashboard/my-products"><BsCoin size={24} className=" mx-2" />Become a Seller</ListItem>
                  <ListItem NavLink="/couriers/new-orders"><TbTruckDelivery size={25} className=" mx-2" />Delivery Partner</ListItem>
                </ul>
              </div>
            </div>
            <div>
              {/* signup and search */}
              <div className="flex items-center justify-end px-4 ">
                <SearchBar />
                <div className="hidden justify-end pr-16 gap-3 sm:flex lg:pr-0 items-center ">
                  <Badge content={cartCount} color="green" className="mx-3">
                    <IconButton color="gray" variant="outlined" className="rounded-full"
                     onClick={() => navigate("/cart")}
                    >
                      <ShoppingCartIcon className="h-3 w-3" />
                    </IconButton>
                  </Badge>
                  <Link to={"/login"} className='bg-transparent border-primary border rounded-full inline-flex items-center 
                                      justify-center py-2 px-8 text-center text-sm font-medium  text-primary
                                      disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
                    Login
                  </Link>

                  <Link to={"/create"} className='bg-primary border-primary border w-full rounded-full inline-flex items-center 
                                      justify-center py-2 px-7 text-center text-sm font-medium   text-white hover:bg-primary/90
                                      disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
                    SignUp
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
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
