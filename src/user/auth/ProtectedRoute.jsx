import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({children, ...rest}) => {
    const token = sessionStorage.getItem('jwtToken');
    const decodedToken = jwtDecode(token);
    const user = decodedToken;
    const jobRole = decodedToken.role;
    return(
        <Route
            
        />
    )
}
export default ProtectedRoute;