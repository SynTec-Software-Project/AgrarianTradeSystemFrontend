import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import LandingPage from "./user/LandingPage";


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


    
    </>
  );
}

export default App;
