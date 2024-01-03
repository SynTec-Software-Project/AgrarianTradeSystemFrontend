import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { MyProducts, MyOrders, NewOrders, MyReviews, MyReturns, Profile } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    title: "Products",
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "My Products",
        path: "/my-products",
        element: <MyProducts />,
      },
    ],
  },
  {

    layout: "dashboard",
    title: "orders",
    pages: [
      {
        icon: <UserCircleIcon {...icon} />,
        name: "New Orders",
        path: "/new-orders",
        element: <NewOrders />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "My Orders",
        path: "/my-orders",
        element: <MyOrders />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "my reviews",
        path: "/my-reviews",
        element: <MyReviews />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "my returns",
        path: "/my-returns",
        element: <MyReturns />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "dashboard",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "Profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;