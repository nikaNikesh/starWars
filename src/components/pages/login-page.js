import React from 'react';
import {useLocation} from "react-router-dom";

const LoginPage = ({ isLoggedIn, onLogin }) => {

    const location = useLocation();

  return (
    <div className="jumbotron">
      <p>Login to see secret page!</p>
      <button
        className="btn btn-primary"
        onClick={onLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
