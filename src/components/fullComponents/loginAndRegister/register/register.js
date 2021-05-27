import React from 'react';
import './register.css';
import {
    Link
} from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";

class dane {
    constructor(email, name, surname, dateOfBirth, password, userTypeId) {
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
        this.password = password;
        this.userTypeId = userTypeId;
    }
}


function Register() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        let daanee = new dane(data.email, data.name, data.surname, data.dateOfBirth, data.password, '1');
        console.log(data);
        axios.post('https://localhost:5001/api/users', daanee, {
            headers: {
                'Content-Type': 'text/json'
            }
        }).then(response => { console.log(response)
           /* var dataContainer = document.getElementById('data-container');
            var dataValue = dataContainer.getAttribute('data-value');
            if (response.status === "200") {
                dataContainer.setAttribute('data-value', "Konto zostało utworzone");
                dataContainer.innerHTML="Konto zostało utworzone";
                dataContainer.style.overflow="visible";
            }
            if(response.status === "403")
            {
                dataContainer.setAttribute('data-value', "Konto już istnieje");
                dataContainer.innerHTML="Konto już istnieje";
                dataContainer.style.overflow="visible";
            }*/
            
        
        }).catch(error => {
            console.log(error.response);
        });
    };
    
    return (
        <div className="register">
            
            <div className="registerContent">
            <div className="registerHeader">
                    GAME SPACE
            </div>
            <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="registerDiv">
                    <label htmlFor="email">Email:</label>
                    <input {...register("email", {
                        required: 'Hasło jest wymagane', pattern: {
                            value: /[A-Za-z0-9]+@[A-Za-z]+.[A-Za-z]/,
                            message: 'Błędny adres email'
                        }
                    })} />
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
                </div>
            </form>
            <div id="data-container" data-value=""></div>
            <div className="loginButtons">
                    <Link to="/login"><button className="btn btn-dark loginbutton" > Przejdź do logowania </button></Link>
                    <br />
                    <Link to="/"><i class="fas fa-home fa-4x"></i></Link>
                </div>
            </div>
            <div className="registerImage"></div>
        </div>
    )
}

export default Register
