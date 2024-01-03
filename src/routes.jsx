import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import MyProducts from "./pages/dashboard/MyProducts";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    //products
    title:"Products",
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "my products",
        path: "/products",
        element: <MyProducts />,
      },
    ],
  },
 
   //orders
  {
    title:"orders",
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "new orders",
        path: "/products",
        element: <MyProducts />,
      },

      {
        icon: <HomeIcon {...icon} />,
        name: "my orders",
        path: "/products",
        element: <MyProducts />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: "my reviews",
        path: "/products",
        element: <MyProducts />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: "my returns",
        path: "/products",
        element: <MyProducts />,
      },
    ],
  
  },
  
  
  
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
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
