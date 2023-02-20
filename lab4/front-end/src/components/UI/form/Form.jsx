import React, {useState} from "react";
import FormInput from "../input/FormInput";
import Button from "../button/Button";
import classes from "./Form.module.css"
import axios from "axios";
import {Navigate} from "react-router-dom";


const Form = ({access, checkAccess}) => {
    const [loginInput, setLoginInput] = useState();
    const [passwordInput, setPasswordInput] = useState();
    const [serverAnswer, setAnswer] = useState();
    const [loginDirty, setLoginDirty] = useState(false);
    const [loginError, setLoginError] = useState('Логин не может быть пустым');
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
    const [disable, setDisable] = useState(true);


    const accessHandler = (access) => {
        checkAccess(access);
    }

    const passwordHandler = (e) => {
        setPasswordInput(e.target.value);
        if (e.target.value.length < 4){
            setPasswordError('Пароль должен быть больше 4 символов');
            setDisable(true);
            if (!e.target.value){
                setPasswordError('Логин не может быть пустым');
                setDisable(true);
            }
        }
        else {
            setPasswordError('');
            if (loginError === ''){
                setDisable(false);
            }
        }
    }

    const loginHandler = (e) => {
        setLoginInput(e.target.value);
        if (!e.target.value){
            setLoginError('Логин не может быть пустым');
            setDisable(true);
        }
        else {
            setLoginError('');
            if (passwordError === ''){
                setDisable(false);
            }
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name){
            case 'login':
                setLoginDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
        }
    }

    if (access){
        return <Navigate to="/main"/>
    }

    return (
        <div className={classes.myForm}>
            <FormInput onBlur={e => blurHandler(e)} name='login' title={'Логин'} placeholder={'логин'} value={loginInput}
                       onChange={e => loginHandler(e)}/>
            {(loginError && loginDirty) && <div style={{color: "red"}}> {loginError} </div>}
            <FormInput onBlur={e => blurHandler(e)} name='password' type={'password'} title={'Пароль'} placeholder={'пароль'} value={passwordInput}
                       onChange={e => passwordHandler(e)}/>
            {(passwordError && passwordDirty) && <div style={{color: "red"}}> {passwordError} </div>}
            <Button id='loginButton' type={'registration'} disabled={disable} onClick={ async () => {
                axios.post("http://" + window.location.host + "/v1/users/login", {
                    username: loginInput,
                    password: passwordInput
                }).then(result => {
                    setAnswer(result.data.message);
                    if (result.data.wasSuccessfully === true){
                        localStorage.setItem("token", result.data.token);
                        accessHandler(true);
                    }
                })
            }
            }>Войти</Button>
            <Button id='registerButton' type={'registration'} onClick={ async () => {
                axios.post("http://" + window.location.host + "/v1/users/register", {
                    username: loginInput,
                    password: passwordInput
                }).then(result => {
                    if (result.data.message === 'Регистрация прошла успешно'){
                        document.getElementById('loginButton').click();
                    } else {
                        setAnswer(result.data.message);
                    }
                })
            }
            }>Регистрация</Button>
            <input readOnly={true} className={classes.example} value={serverAnswer}/>
        </div>
    )
}

export default Form;