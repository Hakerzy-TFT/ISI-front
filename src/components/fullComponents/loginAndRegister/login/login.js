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

function LoginAndRegister() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [cookies, setCookie] = useCookies(['access_token', 'refresh_token']);
    const history = useHistory();
    function handleClick() {
        history.push("/");
    }

    const OnSubmit = (data) => {
        let check = '';
        console.log(data);
        /*axios.post('https://localhost:5001/api/users', data, {
            headers: {
                'Content-Type': 'text/json'
            }
        }).then(response => {
            console.log(response);
            if (response.status === "200") {
                check = "OK";
            }
            if (response.status === "403") {
                check = "Not Found";
            }
            let expires = new Date();
            expires.setTime(expires.getTime() + (response.data.expires_in * 60000));
            setCookie('access_token', response.data.access_token, { path: '/', expires,httpOnly  });
            setCookie('refresh_token', response.data.refresh_token, { path: '/', expires,httpOnly  });
            localStorage.setItem('permission',response.body.usertype);
        }).catch(error => {
            console.log(error.response);
        });*/
        if (check === "OK") {
            handleClick();
        }
        else {
            var dataContainer = document.getElementById('data-container');
            var dataValue = dataContainer.getAttribute('data-value');
            dataContainer.setAttribute('data-value', "Niepoprawny login lub hasło");
            dataContainer.innerHTML = "Niepoprawny login lub hasło";
            dataContainer.style.overflow = "visible";
            setTimeout(() => {
                dataContainer.setAttribute('data-value', "");
            dataContainer.innerHTML = "";
            dataContainer.style.overflow = "hidden";
            }, 5000);
        }
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
                        <input className="btn btn-dark loginbutton" type="submit" value="Sign in" />
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
                    <Link to="/register"><button className="btn btn-dark loginbutton" > Sign up </button></Link>
                    <br />
                    <Link to="/"><i class="fas fa-home fa-4x"></i></Link>
                </div>
            </div>
        </div>

    )
}





export default LoginAndRegister
