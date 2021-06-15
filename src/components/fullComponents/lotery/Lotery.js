import React from 'react';
import './lotery.css';
import Navbar from '../../commons/navbar/Navbar';
import MainFooter from '../../commons/mainFooter/mainFooter';
import {
    useLocation
} from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
class AsKey{
    constructor(value,gameName,username){
        this.value= value;
        this.gameName= gameName;
        this.username= username;
    }
}
function Lotery() {

    const [cookies, setCookie] = useCookies(['access_token', 'loged','currentUserName', 'user_or_studio']);
    const location = useLocation();
    const title = location.state?.gameName;

    function AsignKey(){
        
        var dataContainer = document.getElementById('data-container');
        var cont=new AsKey('50',title,cookies.currentUserName);
        axios.post('http://localhost:5001/api/GameKeys/AssingKey', cont, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status == "200") {
                dataContainer.setAttribute('data-value', "Klucz został dodany");
                dataContainer.innerHTML = "Klucz został dodany";
                dataContainer.style.overflow = "visible";
            }
    
        })
    }
    


    return (
        <div className="lotery">
            <Navbar />
            <div className="loteryBody">
                <div className="loteryHeader">
                {title}
                </div>
                <div className="loteryContent">

                Weź udział w loterii. Masz szansę wygrać klucz dostępowy dla wersji alpha gry {title}.<br/>
                <button id="1000coins" type="button" className="btn btn-warning btn-circle btn-xl" onClick={AsignKey}>Weź udział w loterii</button>
                <div id="data-container" data-value=""></div>
                </div>

            </div>
            <MainFooter />
        </div>
    )
}

export default Lotery
