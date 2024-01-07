import { Configurator, DashboardNavbar, Sidenav,} from '@/widgets/layout'
import React from 'react'
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";

import { Routes,Route } from 'react-router-dom'
import { buyerRoutes } from '../route/BuyerRoute';
import Routing from '../route/Routing';
import { SideBar } from '../components/SideBar';
import { MyOrders } from '@/pages/SellerDashboard/dashboard';
const BuyerDashboard = () => {
    const [controller, dispatch] = useMaterialTailwindController();
    const { sidenavType } = controller;
 
    return (
    <div className='min-h-screen bg-blue-gray-50/50'>
        <SideBar/>

        <div className='p-4 xl:ml-80'>
             <DashboardNavbar/>
             <Configurator/>
        <Routing/>
        </div>
    </div>
  )
}
BuyerDashboard.displayName="src/buyer/BuyerDashboard.jsx";
export default BuyerDashboard;