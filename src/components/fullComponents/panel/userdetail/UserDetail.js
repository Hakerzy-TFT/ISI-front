import React, {useState, useEffect} from 'react';
import './UserDetail.css';
import Navbar from '../../../commons/navbar/Navbar';
import MainFooter from '../../../commons/mainFooter/mainFooter';
import Activities from '../activities/activities';
import {
    Link
} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { useCookies } from 'react-cookie';
import axios from 'axios';

class detailedUser {
    constructor(username, email, name, surname, wallet, dateOfBirth) {
        this.username = username;
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.wallet = wallet;
        this.dateOfBirth = dateOfBirth;
    }
}

function UserDetail() {
    const [cookies, setCookie] = useCookies(['access_token', 'loged','currentUserName', 'user_or_studio']);
    var token = cookies.access_token;
    var decoded = jwt_decode(token);
    var username = decoded.given_name;

    const [useob, setUserob] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:5001/api/Users/'+decoded.userId , {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            setUserob(new detailedUser(response.data.username,
                response.data.email,
                response.data.name,
                response.data.surname,
                response.data.wallet,
                response.data.dateOfBirth));
        }
        );
    }, []);




    return (
        <div className="userPanel">
            <Navbar />
            {cookies.loged === '1' && <div className="userPanelContent">
                <div className="userPanelLeftContent">
                    <i className="fas fa-wheelchair fa-3x"></i>
                    <div className="userPanelInfos">

                        <div className="userPanelLevel">
                            {username}<br />
                            14<br />
                            Poziom społeczności
                        </div>
                        <Link to="/userDetail"><div className="userPanelOptions">
                            Informacje o koncie
                        </div></Link>
                        <div className="userPanelOptions">
                        <hr/>
                        </div>
                        <Link to="/accountInfo"><div className="userPanelOptions">
                            Ustawienia
                        </div></Link>
                    </div>
                </div>
                <div className="userPanelRightContent">
                    Informacje:
                    {useob&&<div className="userPanelActivities">
                    <label className="labelAccountInfo">Pseudonim:</label><label className="labelAccountInfo">{useob.username}</label><br/>
                    <label className="labelAccountInfo">Email:</label><label className="labelAccountInfo">{useob.email}</label><br/>
                    <label className="labelAccountInfo">Imię:</label><label className="labelAccountInfo">{useob.name}</label><br/>
                    <label className="labelAccountInfo">Nazwisko:</label><label className="labelAccountInfo">{useob.surname}</label><br/>
                    <label className="labelAccountInfo">Stan konta:</label><label className="labelAccountInfo">{useob.wallet}</label><br/>
                    <label className="labelAccountInfo">Data urodzenia:</label><label className="labelAccountInfo">{useob.dateOfBirth}</label><br/>
                    
                    </div>}
                </div>
            </div>}
            <MainFooter />
        </div >
    )
}

export default UserDetail
