import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import './login.css';
import {
    Link,
    withRouter
} from 'react-router-dom';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useCookies } from 'react-cookie';
import jwt_decode from "jwt-decode";


class daneLogowania {
    constructor(userMail, password, role) {
        this.userMail = userMail;
        this.password = password;
        this.role = role;
    }
}


function LoginAndRegister() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [cookies, setCookie] = useCookies(['access_token']);
    const history = useHistory();
    function handleClick() {
        history.push("/");
    }

    const OnSubmit = (data) => {
        let check = '';
        let danee = new daneLogowania(data.email, data.password, "string");
        console.log(data);
        axios.post('https://localhost:5001/api/Users/login', danee, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response);
            if (response.status == "200") {
                let expires = new Date();
                expires.setTime(expires.getTime() + (response.data.expires_in * 604800000));
                setCookie('access_token', response.data, { path: '/', expires });
                var decoded = jwt_decode(cookies["access_token"]);
                localStorage.setItem('username', decoded.email);
                localStorage.setItem('permission', "string");
                handleClick();
            }
            console.log(check);

        });
        var dataContainer = document.getElementById('data-container');
        dataContainer.setAttribute('data-value', "Niepoprawny login lub hasło");
        dataContainer.innerHTML = "Niepoprawny login lub hasło";
        dataContainer.style.overflow = "visible";
        setTimeout(() => {
            dataContainer.setAttribute('data-value', "");
            dataContainer.innerHTML = "";
            dataContainer.style.overflow = "hidden";
        }, 5000);

    };

    return (
        <div className="loginAndRegister">
            <div className="loginImage" />
            <div className="loginContent">
                <div className="loginHeader">
                    GAME SPACE
            </div>
                <div className="loginForm">
                    <form onSubmit={handleSubmit(OnSubmit)}>
                        <label htmlFor="email">Email:</label>
                        <input {...register("email", { required: 'Email jest wymagany' })} />
                        <br />
                        <label htmlFor="password">Hasło:</label>
                        <input type="password" {...register("password", { required: 'Hasło jest wymagane' })} />
                        <br />
                        <br />
                        <br />
                        <input className="btn btn-dark loginbutton" type="submit" value="Zaloguj się" />
                        {
                            (errors.email
                                &&
                                (<div className="error">{errors.email.message}</div>))
                            || (errors.password
                                &&
                                (<div className="error">{errors.password.message}</div>))
                        }
                    </form>
                    <div id="data-container" data-value=""></div>
                </div>
                <div className="loginButtons">
                    <Link to="/register"><button className="btn btn-dark loginbutton" > Przejdź do rejestracji </button></Link>
                    <br />
                    <Link to="/"><i class="fas fa-home fa-4x"></i></Link>
                </div>
            </div>
        </div>

    )
}





export default LoginAndRegister
