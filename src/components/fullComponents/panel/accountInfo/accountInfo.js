import React from 'react';
import './accountInfo.css';
import Navbar from '../../../commons/navbar/Navbar';
import MainFooter from '../../../commons/mainFooter/mainFooter';
import Activities from '../activities/activities';
import {
    Link
} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { useCookies } from 'react-cookie';
import axios from 'axios';
class InfoToChange {
    constructor(endUserId, username) {
        this.endUserId = endUserId;
        this.username = username;
    }
}
class PassToChange {
    constructor(endUserId, password) {
        this.endUserId = endUserId;
        this.password = password;
    }
}
function AccountInfo() {

    const [cookies, setCookie] = useCookies(['access_token', 'loged', 'currentUserName', 'user_or_studio']);
    var token = cookies.access_token;
    var decoded = jwt_decode(token);
    var username = decoded.given_name;
    function changeUsername() {
        var dataContainer = document.getElementById('data-container');
        if (document.getElementById("pseudonim").value === "") {
            dataContainer.setAttribute('data-value', "Podaj nowy pseudonim");
            dataContainer.innerHTML = "Podaj nowy pseudonim";
            dataContainer.style.overflow = "visible";
            setTimeout(() => {
                dataContainer.setAttribute('data-value', "");
                dataContainer.innerHTML = "";
                dataContainer.style.overflow = "hidden";
            }, 10000);
        }
        else {
            if (cookies.loged !== "undefined") {
                var token = cookies.access_token;
                var decoded = jwt_decode(token);
                var can = new InfoToChange(decoded.userId, document.getElementById("pseudonim").value);
                axios.put('http://localhost:5001/api/Users/update-username', can, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response => {
                    if (response.status == "200") {
                        dataContainer.setAttribute('data-value', "Pseudonim został zmieniony");
                        dataContainer.innerHTML = "Pseudonim został zmieniony";
                        dataContainer.style.overflow = "visible";
                    }

                }).catch(error => {
                    dataContainer.setAttribute('data-value', "Pseudonim nie został zmieniony");
                    dataContainer.innerHTML = "Pseudonim nie został zmieniony";
                    dataContainer.style.overflow = "visible";
                })
            }
            else {
                dataContainer.setAttribute('data-value', "Zaloguj się aby zmienić pseudonim");
                dataContainer.innerHTML = "Zaloguj się aby zmienić pseudonim";
                dataContainer.style.overflow = "visible";
                setTimeout(() => {
                    dataContainer.setAttribute('data-value', "");
                    dataContainer.innerHTML = "";
                    dataContainer.style.overflow = "hidden";
                }, 10000);
            }
        }
    };





    function changePassword() {
        var dataContainer = document.getElementById('data-container');
        if (document.getElementById("firstPass").value === "" || document.getElementById("secondPass").value === "" || document.getElementById("secondPass").value !== document.getElementById("firstPass").value) {
            dataContainer.setAttribute('data-value', "Podaj nowe haslo");
            dataContainer.innerHTML = "Podaj nowe haslo";
            dataContainer.style.overflow = "visible";
            setTimeout(() => {
                dataContainer.setAttribute('data-value', "");
                dataContainer.innerHTML = "";
                dataContainer.style.overflow = "hidden";
            }, 10000);
        }
        else {
            if (cookies.loged !== "undefined") {
                var token = cookies.access_token;
                var decoded = jwt_decode(token);
                var can = new PassToChange(decoded.userId, document.getElementById("firstPass").value);
                axios.put('http://localhost:5001/api/Users/update-password', can, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response => {
                    if (response.status == "200") {
                        dataContainer.setAttribute('data-value', "Hasło zostało zmienione");
                        dataContainer.innerHTML = "Hasło zostało zmienione";
                        dataContainer.style.overflow = "visible";
                    }

                }).catch(error => {
                    dataContainer.setAttribute('data-value', "Hasło nie zostało zmienione");
                    dataContainer.innerHTML = "Hasło nie zostało zmienione";
                    dataContainer.style.overflow = "visible";
                })
            }
            else {
                dataContainer.setAttribute('data-value', "Zaloguj się aby zmienić hasło");
                dataContainer.innerHTML = "Zaloguj się aby zmienić hasło";
                dataContainer.style.overflow = "visible";
                setTimeout(() => {
                    dataContainer.setAttribute('data-value', "");
                    dataContainer.innerHTML = "";
                    dataContainer.style.overflow = "hidden";
                }, 10000);
            }
        }
    };


    return (
        <div className="accountInfo">
            <Navbar />
            <div className="accountInfoContent">
                <div className="accountInfoLeftContent">
                    <i className="fas fa-wheelchair fa-3x"></i>
                    <div className="accountInfoInfos">
                        <div className="userPanelLevel">
                            {username}<br />
                            14<br />
                            Poziom społeczności
                        </div>
                        <Link to="/userDetail"><div className="userPanelOptions">
                            Informacje o koncie
                        </div></Link>
                        <div className="userPanelOptions">
                            <hr />
                        </div>
                        <Link to="/accountInfo"><div className="userPanelOptions">
                            Ustawienia
                        </div></Link>
                    </div>
                </div>
                <div className="accountInfoRightContent">
                    Ustawienia:
                    <div className="accountInfoActivities">
                        <label className="labelAccountInfo">Zmień pseudonim:</label>
                        <input type="text" name="pseudonim" id="pseudonim" /> <button type="button" class="btn btn-light" onClick={changeUsername}>Zmień</button><br /><br />
                        <label className="labelAccountInfo">Zmień hasło:</label>
                        <input type="password" name="peas" id="firstPass" /> <button type="button" class="btn btn-light" onClick={changePassword}>Zmień</button><br />
                        <label className="labelAccountInfo">Powtórz hasło:</label>
                        <input type="password" name="peas" id="secondPass" /><br />
                        <div id="data-container" data-value=""></div>
                    </div>
                </div>
            </div>
            <MainFooter />
        </div>
    )
}

export default AccountInfo
