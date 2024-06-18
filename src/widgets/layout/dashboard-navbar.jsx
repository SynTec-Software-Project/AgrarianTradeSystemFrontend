import { useLocation, Link } from "react-router-dom";
import logout from "@/user/auth/Logout.js";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { SiGooglemessages } from "react-icons/si";
import axios from "axios";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  ClockIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setOpenSidenav,
} from "@/context";
import { useState, useEffect } from "react";

export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  const [notificationList, setNotificationList] = useState([]);
  const to = "adam.jayasinghe@example.com";

  useEffect(() => {
    axios
      .get(`https://localhost:7144/api/NewOrder/getnotification/` + to)
      .then((response) => {
        setNotificationList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
      });
  }, []);

  const deleteNotification = (id) => {
    axios
      .delete(`https://localhost:7144/api/NewOrder/deletenotification/${id}`)
      .then((response) => {
        console.log("Notification deleted:", response.data);
        setNotificationList(notificationList.filter((notification) => notification.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting notification:", error);
      });
  };

  return (
    <Navbar
      color={fixedNavbar ? "white" : "transparent"}
      className={`rounded-xl transition-all ${
        fixedNavbar
          ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
          : "px-0 py-1"
      }`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Breadcrumbs
            className={`bg-transparent p-0 transition-all ${
              fixedNavbar ? "mt-1" : ""
            }`}
          >
            <Link to={`/${layout}`}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
              >
                {layout}
              </Typography>
            </Link>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {page}
            </Typography>
          </Breadcrumbs>
          <Typography variant="h6" color="blue-gray">
            {page}
          </Typography>
        </div>
        <div className="flex items-center justify-between">
          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
          </IconButton>
          <div className="flex justify-end">
          <Button
              variant="text"
              color="red"
              className="flex gap-2 items-center normal-case px-3"
              onClick={logout}
            >
              <UserCircleIcon className="h-5 w-5 text-red-500" />
              Sign Out
            </Button>  
           
          <Menu>
            <MenuHandler>
              <IconButton variant="text" color="blue-gray">
                <BellIcon className="h-5 w-5 text-blue-gray-500" />
              </IconButton>
            </MenuHandler>

            <MenuList className="w-max border-0">
              {notificationList.map((notification) => (
                <MenuItem key={notification.id} className="flex items-center gap-3">
                <SiGooglemessages className="text-3xl -mt-6" /> {/* Increase size and adjust top margin */}
                <div className="flex-grow">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mt-1 font-normal"
                  >
                    <strong>{notification.from}</strong>
                  </Typography>
                  <Typography
                    
                    color="green"
                    className="flex items-center gap-1 text-xs font-normal"
                  >
                    <strong>{notification.message}</strong>
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> {new Date(notification.sendAt).toLocaleTimeString()}
                  </Typography>
                </div>
                <RiDeleteBack2Fill
                  className="ml-6 text-2xl cursor-pointer" // Increase left margin and size
                  onClick={() => deleteNotification(notification.id)}
                />
              </MenuItem>              
              ))}
            </MenuList>
          </Menu>
          </div>
        </div>
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
