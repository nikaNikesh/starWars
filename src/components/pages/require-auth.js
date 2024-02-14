import React from "react";
import {useLocation, Navigate} from "react-router-dom";

const RequireAuth = ({ children }) => {

    const location = useLocation();
    const isLoggedIn = false;

    if (!isLoggedIn) {
        return <Navigate to='/login' />
    }

    return children;
}

export default RequireAuth;