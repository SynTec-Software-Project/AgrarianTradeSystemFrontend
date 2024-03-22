import { useLocation, Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

const Auth = ({ allowedRoles }) => {
    const token = sessionStorage.getItem('jwtToken');
    const decodedToken = jwtDecode(token);
    const jobRole = decodedToken.role;
    console.log(jobRole);
    const location = useLocation();

 return allowedRoles.includes(jobRole) ? (
    <Outlet />
 ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
 );
};

export default Auth;
