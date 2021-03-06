import React from 'react';
import './register.css';
import {
    Link
} from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";

class dane {
    constructor(username,email, name, surname, dateOfBirth, password, userTypeId) {
        this.username=username;
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
        this.password = password;
        this.userTypeId = userTypeId;
    }
}


function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        var dataContainer = document.getElementById('data-container');
        let daanee = new dane(data.username,data.email, data.name, data.surname, data.dateOfBirth, data.password, '1');
        console.log(data);
        axios.post('http://localhost:5001/api/users', daanee, {
            headers: {
                'Content-Type': 'text/json'
            }
        }).then(response => {
            console.log(response)
            if (response.status == "200") {
                dataContainer.setAttribute('data-value', "Konto zostało utworzone");
                dataContainer.innerHTML = "Konto zostało utworzone";
                dataContainer.style.overflow = "visible";
            }

        }).catch(error => {
            dataContainer.setAttribute('data-value', "Konto już istnieje");
            dataContainer.innerHTML = "Konto już istnieje";
            dataContainer.style.overflow = "visible";
        });
        setTimeout(() => {
            dataContainer.setAttribute('data-value', "");
            dataContainer.innerHTML = "";
            dataContainer.style.overflow = "hidden";
        }, 5000);
    };

    return (
        <div className="register">

            <div className="registerContent">
                <div className="registerHeader">
                    GAME SPACE
            </div>
            <div className="registerDiv">
                <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
                    
                        <label htmlFor="email">Email:</label>
                        <input {...register("email", {
                            required: 'Email jest wymagany', pattern: {
                                value: /[A-Za-z0-9]+@[A-Za-z]+.[A-Za-z]/,
                                message: 'Błędny adres email'
                            }
                        })} />
                        <br />
                        <label htmlFor="username">Login:</label>
                        <input {...register("username", { required: 'Login jest wymagany', pattern: {
                                value: /[A-Za-z0-9]/,
                                message: 'Błędny login'
                            } })} />
                        <br />
                        <label htmlFor="name">Imię:</label>
                        <input {...register("name", { required: 'Imię jest wymagane' })} />
                        <br />
                        <label htmlFor="surname">Nazwisko:</label>
                        <input {...register("surname", { required: 'Nazwisko jest wymagane' })} />
                        <br />
                        <label htmlFor="dateOfBirth">Data urodzenia:</label>
                        <input type="date" {...register("dateOfBirth", { required: 'Data urodzenia jest wymagana' })} />
                        <br />
                        <label htmlFor="password">Hasło:</label>
                        <input type="password"  {...register("password", {
                            required: 'Hasło jest wymagane', minLength: {
                                value: 8,
                                message: 'Hasło musi mieć conajmniej 8 znaków'
                            }
                        })} />
                        <br />
                        <input className="btn btn-dark loginbutton" type="submit" value="Zarejestruj się" />
                        {
                            (errors.email
                                &&
                                (<div className="error">{errors.email.message}</div>))
                            || (errors.name
                                &&
                                (<div className="error">{errors.name.message}</div>))
                            ||
                            (errors.surname
                                &&
                                (<div className="error">{errors.surname.message}</div>))
                            ||
                            (errors.dateOfBirth
                                &&
                                (<div className="error">{errors.dateOfBirth.message}</div>))
                            ||
                            (errors.password
                                &&
                                (<div className="error">{errors.password.message}</div>))
                        }
                    
                </form>
                <div id="data-container" data-value=""></div>
                </div>
                <div className="loginButtons">
                    <Link to="/login"><button className="btn btn-dark loginbutton" > Przejdź do logowania </button></Link>
                    <br />
                    <Link to="/"><i className="fas fa-home fa-4x"></i></Link>
                </div>
            </div>
            <div className="registerImage"></div>
        </div>
    )
}

export default Register
