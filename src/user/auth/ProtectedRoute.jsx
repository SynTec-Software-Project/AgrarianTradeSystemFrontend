// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const ProtectedRoute = ({children, role}) => {
//     const token = sessionStorage.getItem('jwtToken');
//     const decodedToken = jwtDecode(token);
//     const user = decodedToken;
//     const jobRole = decodedToken.role;
//     const hasAccess = jobRole.includes(role);
//     console.log(hasAccess)

//     return hasAccess ? <>{children}</> : "";
// }
// export default ProtectedRoute;