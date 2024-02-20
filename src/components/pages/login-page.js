import React from 'react';
import {Navigate, useNavigate} from "react-router-dom";
import {AuthConsumer} from "../auth-context";

const LoginPage = () => {

    const navigate = useNavigate();

    return (
        <AuthConsumer>
            {
                (authContextValue) => {
                    return (
                        <div className="jumbotron">
                            <p>Login to see secret page!</p>
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    authContextValue.onAuth();
                                    navigate("/secret");
                                }}>
                                Login
                            </button>
                        </div>
                    )
                }
            }

        </AuthConsumer>
    );
};

export default LoginPage;
