import React from "react";
import Header from "../modules/header/Header";
import classes from "../pages/app/app.module.css";

const ErrorPage = () => {

    return (
        <div className={classes.app}>
            <Header title={"Что-то пошло не так"}/>
        </div>
    )
}

export default ErrorPage;