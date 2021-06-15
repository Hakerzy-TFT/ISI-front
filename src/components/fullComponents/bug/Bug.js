import React, { useEffect, useState } from 'react';
import './Bug.css';
import Navbar from '../../commons/navbar/Navbar';
import MainFooter from '../../commons/mainFooter/mainFooter';
import {
    Link, useLocation
} from 'react-router-dom';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useCookies } from 'react-cookie';
class bugElement {
    constructor(title, description, endUserId,gameId) {
        this.title = title;
        this.description = description;
        this.endUserId = endUserId;
        this.gameId = gameId;
    }
}
function Bug() {
    const [cookies, setCookie] = useCookies(['access_token', 'loged','currentUserName', 'user_or_studio']);
    const location = useLocation();
    const title = location.state?.gameName;
    const gameId = location.state?.gameId;

    function postBug() {

        var dataContainer = document.getElementById('data-container');
        if (document.getElementById("BugReportContent").value === ""||document.getElementById("BugTitle").value === "") {
            dataContainer.setAttribute('data-value', "Uzupełnij wszystkie pola");
            dataContainer.innerHTML = "Uzupełnij wszystkie pola";
            dataContainer.style.overflow = "visible";
            setTimeout(() => {
                dataContainer.setAttribute('data-value', "");
                dataContainer.innerHTML = "";
                dataContainer.style.overflow = "hidden";
            }, 10000);
        }
        else {
            if (cookies.loged!=="undefined") {
                var token = cookies.access_token;
                var decoded = jwt_decode(token);
                var cont= new bugElement(document.getElementById("BugTitle").value, document.getElementById("BugReportContent").value, decoded.userId, gameId);
                axios.post('http://localhost:5001/api/Bugs', cont, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response => {
                    if (response.status == "200") {
                        dataContainer.setAttribute('data-value', "Wpis został dodany");
                        dataContainer.innerHTML = "Wpis został dodany";
                        dataContainer.style.overflow = "visible";
                    }

                })
            }
            else {
                dataContainer.setAttribute('data-value', "Zaloguj się aby dodać komentarz");
                dataContainer.innerHTML = "Zaloguj się aby dodać komentarz";
                dataContainer.style.overflow = "visible";
                setTimeout(() => {
                    dataContainer.setAttribute('data-value', "");
                    dataContainer.innerHTML = "";
                    dataContainer.style.overflow = "hidden";
                }, 10000);
            }
        }
    }


    return (
        <div className="Bug">
            <Navbar />

            <div className="BugBody">
                
                <div className="BugContent">
                {title}<br/>
                <label id="BugDesc">Tytuł:</label>
                <input type="text" id="BugTitle"></input><hr/>
                <label id="BugDesc">Treść raportu:</label><textarea id="BugReportContent"></textarea><hr/>
                <button type="button" class="btn btn-light center" onClick={postBug}>Wyślij</button><br/>
                <div id="data-container" data-value=""></div>
                </div>
            </div>

            <MainFooter />
        </div>
    )
}

export default Bug
