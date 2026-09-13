import React from "react";
import icon from './error.jpg';
import "./error-indicator.css";

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="Картинка ошибки"/>
            <span className="boom">BOOM!</span>
            <span>
              something went wrong
            </span>
            <span>
              (but we already trying to fix it)
            </span>
        </div>
    );
}
export default ErrorIndicator;