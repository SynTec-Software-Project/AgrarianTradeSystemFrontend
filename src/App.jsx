import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import LandingPage from "./user/LandingPage";
import Login from "./pages/SellerDashboard/auth/Login";


function App() {
  return (
    <>
     <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      {/* <Route path="*" element={<Navigate to="/dashboard/home" replace />} /> */}
    </Routes> 

    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>

    <Routes>
      <Route path="/login" element={<Login/>} />
    </Routes>
    
    </>
  );
}

export default App;
