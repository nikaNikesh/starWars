import React from "react";
import {Navigate} from "react-router-dom";
import {AuthConsumer} from "../auth-context";

const RequireAuth = ({children}) => {
    return (<AuthConsumer>
        {
            ({isLoggedIn}) => {
                if (!isLoggedIn) {
                    return <Navigate to='/login'/>
                }

                return children;
            }
        }
    </AuthConsumer>)


}

export default RequireAuth;
