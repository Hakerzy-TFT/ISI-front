import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './login.css';
import {
    Link
} from 'react-router-dom';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useCookies } from 'react-cookie';

class daneLogowania {
    constructor(userMail, password, role) {
        this.userMail = userMail;
        this.password = password;
        this.role = role;
    }
}


function LoginAndRegister() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [cookies, setCookie] = useCookies(['access_token','loged']);
    const history = useHistory();
    function handleClick() {
        history.push("/");
    }

    const OnSubmit = (data) => {
        let check = '';
        let danee = new daneLogowania(data.email, data.password);
        console.log(data);
        axios.post('http://localhost:5001/api/Users/login', danee, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response);
            if (response.status == "200") {
                let expires = new Date();
                expires.setTime(expires.getTime() + (response.data.expires_in * 604800000));
                setCookie('access_token', response.data, { path: '/', expires });
                setCookie('loged','1',{ path: '/' });
                console.log(cookies.loged);
                handleClick();
            }
            console.log(check);

       }
        );
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

    const onSuccess = googleUser => {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        let expires = new Date();
        expires.setTime(expires.getTime() + (7 * 604800000));
        setCookie('access_token', profile, { path: '/', expires });
        setCookie('loged','1',{ path: '/' });
        console.log(cookies.loged);
        handleClick();
    };
    const onFailure = error => {
        console.log(error);
    };

    useEffect(() => {
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                client_id: "643527918504-p9gm23e4egq4mgr2hgo49fcng03blv9p.apps.googleusercontent.com"
        }).then(() => {
                    window.gapi.signin2.render('my-signin2', {
                        'scope': 'https://www.googleapis.com/auth/plus.login',
                        'width': 250,
                        'height': 50,
                        'longtitle': true,
                        'theme': 'dark',
                        'onsuccess': onSuccess,
                        'onfailure': onFailure
                    });
                });
        });
    }, []);
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
                        <input {...register("email",{
                            required: 'Email jest wymagany', pattern: {
                                value: /[A-Za-z0-9]+@[A-Za-z]+.[A-Za-z]/,
                                message: 'Błędny adres email'
                            }
                        })} />
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
                    <div id="my-signin2" className="googleLogin"></div>
                </div>
                <div className="loginButtons">
                    <Link to="/register"><button className="btn btn-dark loginbutton" > Przejdź do rejestracji </button></Link>
                    <br />
                    <Link to="/"><i className="fas fa-home fa-4x"></i></Link>
                </div>
            </div>
        </div>

    )
}





export default LoginAndRegister
