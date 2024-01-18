import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import LandingPage from "./user/LandingPage";
import Login from "./pages/SellerDashboard/auth/Login";
import AddProductForm from "./pages/SellerDashboard/dashboard/tabs/MyProduct/AddProductForm";
import BuyerDashboard from "./buyer/layout/BuyerDashboard";
import CourierDashboard from "./courier/layout/CourierDashboard";
import ProductList from "./user/pages/ProductList";


function App() {
  return (
    <>
     <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      {/* <Route path="*" element={<Navigate to="/dashboard/home" replace />} /> */}
    </Routes> 

    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/buyers/*" element={<BuyerDashboard/>}/>
      <Route path="/couriers/*" element={<CourierDashboard/>}/>
      <Route path="/products" element={<ProductList/>}/>
    </Routes>


    <Routes>
      <Route path="/login" element={<Login/>} />
    </Routes>
    
   
    
    </>
  );
}

export default App;
