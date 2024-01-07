import {
    HomeIcon,
    UserCircleIcon,
    TableCellsIcon,
    InformationCircleIcon,
    ServerStackIcon,
    RectangleStackIcon,
  } from "@heroicons/react/24/solid";
import MyOrders from "../pages/MyOrders";
import MyReviews from "../pages/MyReviews";
import MyReturns from "../pages/MyReturns";

export const buyerRoutes=[
    {
        title: "orders",
        layout: "buyers",
        pages: [
          {
            icon: <HomeIcon />,
            name: "My Orders",
            path: "/my-orders",
            element: <MyOrders />,
          },
          {
            icon: <HomeIcon/>,
            name: "My Reviews",
            path: "/my-reviews",
            element: <MyReviews />,
          },
          {
            icon: <HomeIcon />,
            name: "My Returns",
            path: "/my-returns",
            element: <MyReturns />,
          },
        ],
      },
        

];
