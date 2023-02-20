import React from "react";
import classes from "./Button.module.css";

const getStyle = (type) => {
    switch (type){
        case "authorization":
            return classes.regButton;
        case "registration":
            return classes.myButton;
        case "logout":
            return classes.logout;
        default:
            return classes.myButton;
    }
}

const Button = ({children, type, ...props}) => {
    return (
        <button disabled={props.disabled} id={props.id} {...props} className={getStyle(type)} onClick={props.onClick}>
            {children}
        </button>
    )
};

export default Button;