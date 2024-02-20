import {Outlet} from 'react-router-dom';
import React, {Component} from "react";
import {AuthProvider} from "./auth-context";

export default class AuthRouterProvider extends Component {

    state = {
        isLoggedIn: false
    };

    onAuth = () => {
        this.setState(() => {
            return {
                isLoggedIn: true
            }
        })

    };


    render() {
        const { isLoggedIn } = this.state;

        const authContextValue = {
            isLoggedIn: isLoggedIn,
            onAuth: this.onAuth
        };
        return (
            <AuthProvider value={authContextValue}>
                <Outlet/>
            </AuthProvider>
        );
    };
}