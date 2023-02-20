import Header from "../modules/header/Header";
import Button from "../components/UI/button/Button";
import React, {useEffect} from "react";
import MainPage from "../pages/mainPage/MainPage";
import {Navigate} from "react-router-dom";

const GraphLayout = ({access, accessHandler}) => {
    useEffect(() => {
        if (localStorage.getItem("access") === "true"){
            accessHandler(true);
        }
    },[accessHandler]);

    setInterval(() => {
        localStorage.setItem("usersOffset",new Date().getTimezoneOffset() / (-60).toString());
    }, 1000);

    const handleClick = (value) => {
        accessHandler(value);
    }
    if (!access){
        return (
            <Navigate to='/'/>
        )
    }
    else {
        return (
            <div>
                <Header title={"Главная страница"}/>
                <MainPage/>
                <Button type={'logout'} onClick={
                    () => {
                        localStorage.removeItem("token");
                        localStorage.removeItem("access");
                        handleClick(false);
                    }
                }>выйти</Button>
            </div>

        )
    }
}

export default GraphLayout;