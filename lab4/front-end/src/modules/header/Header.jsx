import React from "react";
import classes from "./header.module.css";
const Header = (props) => {
    return (
        <header>
            <h1 className={classes.myHeader}>
                {props.title}
            </h1>
        </header>
    )
}

export default Header;