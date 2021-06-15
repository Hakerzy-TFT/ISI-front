import React, { useEffect, useState } from 'react';
import './dropdownMenu.css';
import {
    Link
} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { useCookies } from 'react-cookie';
import axios from 'axios';

class userInfo {
    constructor(username, usertype, wallet) {
        this.username = username;
        this.usertype = usertype;
        this.wallet = wallet;
    }
}

function DropdownMenu() {
    //let userin = new userInfo("", "", 0);
    const [cookies, setCookie] = useCookies(['access_token', 'loged','currentUserName', 'user_or_studio']);
    const [userin,setUser]=useState(null);
    useEffect(async() => {
        var token = cookies.access_token;
        var decoded = jwt_decode(token);
        axios.get('http://localhost:5001/api/Users/' + decoded.userId, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            const userin = new userInfo(response.data.username, response.data.userType, response.data.wallet);
            setUser(userin);
        }
        );
    },[]);
    return (
        <div className="dropdownMenu">
            <div className="dropdownMenuHeader">
            {userin &&<div className="dropdownMenuUsername"><h1 id="DropDownUserName">{userin.username}</h1>{userin.usertype} </div>}
                <div className="dropdownMenuIco"> <img className="miniatureGameImg" src={process.env.PUBLIC_URL + '/assets/backgrounds/Biomutant.jpg'} alt="IMG NOT LOADED" />
                </div>
            </div>
            <div className="dropdownMenuOptions">
                <div className="dropdownMenuOpiton">Monety {userin&&<div className="dropdownMenuCoins"> {userin.wallet}</div>}</div>
                <div className="dropdownMenuOpiton">Biblioteka</div>
                <div className="dropdownMenuOpiton">Trofea</div>
                <div className="dropdownMenuOpiton"><Link to="/topUpCoins">Doładuj monety</Link> <div className="dropdownMenuCoins"><i className="fas fa-coins"></i></div></div>
            </div>
        </div>
    )
}

export default DropdownMenu
