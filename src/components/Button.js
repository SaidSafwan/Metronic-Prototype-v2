import React from "react";
import "./index.css";

const Button = ({ children, className, ...props }) => {
    return (
        <button className={`button ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
