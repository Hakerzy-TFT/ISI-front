import React from 'react';
import { useState } from 'react';
import './login.css';
import {
    Link,
    withRouter
} from 'react-router-dom';
import axios from 'axios';
function LoginAndRegister() {
    const [state, setState] = useState({
        email: "",
        password: "",
        successMessage: null
    })
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload={
            "email":state.email,
            "password":state.password,
        }
       /* axios.post(API_BASE_URL+'login', payload)
            .then(function (response) {
                if(response.data.code === 200){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Login successful. Redirecting to home page..'
                    }))
                    redirectToHome();
                    props.showError(null)
                }
                else if(response.data.code === 204){
                    props.showError("Username and password do not match");
                }
                else{
                    props.showError("Username does not exists");
                }
            })
            .catch(function (error) {
                console.log(error);
            });*/
    }

    return (
        <div className="loginAndRegister">
            <form>
            <div class="container">
                <label htmlfor="uname"><b>Login</b></label>
                <input type="email" placeholder="Wprowadź email" id="email" name="email" value={state.username} onChange={handleChange} />
                <label htmlfor="password"><b>Hasło</b></label>
                <input type="password" placeholder="Wprowadź hasło" id="password" name="password" value={state.password} onChange={handleChange} />
                <button type="submit" className="btn btn-secondary" onClick={handleSubmitClick}>Login</button>
            </div>
            </form>
            <div className="container">
                <Link to="/register"><button type="button" className="cancelbtn">Zarejestruj się</button></Link>
            </div>
        </div>

    )
}

export default LoginAndRegister
