import { Routes, Route, Navigate, Router } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import LandingPage from "./user/LandingPage";
import BuyerDashboard from "./buyer/layout/BuyerDashboard";
import CourierDashboard from "./courier/layout/CourierDashboard";
import ProductList from "./user/pages/ProductList";
import Login from "./user/auth/Login";
import CreateAccount from "./user/auth/CreateAccount";
import FarmerCreateAccount from "./user/auth/FarmerCreateAccount";
import CourierCreateAccount from "./user/auth/CourierCreateAccount";
import ForgotPassword from "./user/auth/ForgotPassword";

function App() {
  
  
  
  
  // const routes = {
  //   admin: [
  //     {
  //       path: "/dashboard",
  //       component: AdminDashboard,
  //       // Other admin routes...
  //     },
  //   ],
  //   farmer: [
  //     {
  //       path: "/dashboard",
  //       component: FarmerDashboard,
  //       // Other farmer routes...
  //     },
  //   ],
  //   // Define routes for other roles...
  // };
  
  return (
    <>
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />} />
          {/* <Route path="*" element={<Navigate to="/dashboard/home" replace />} /> */}
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/buyers/*" element={<BuyerDashboard/>}/> */}
          <Route path="/couriers/*" element={<CourierDashboard/>}/>
          <Route path="/products" element={<ProductList/>}/>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/create" element={<CreateAccount/>}/>
          <Route path="/farmercreate" element={<FarmerCreateAccount/>}/>
          <Route path="/couriercreate" element={<CourierCreateAccount/>}/>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        </Routes> 

    
    </>
  );
}

export default App;
