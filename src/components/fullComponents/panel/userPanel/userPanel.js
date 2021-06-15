import React, { Component,useEffect } from 'react';
import './userPanel.css';
import Navbar from '../../../commons/navbar/Navbar';
import MainFooter from '../../../commons/mainFooter/mainFooter';
import Activities from '../activities/activities';
import { ShowForPermission } from '../../../ShowForPermissions';
import {
    Link
} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { useCookies } from 'react-cookie';


function UserPanel() {
    const [cookies, setCookie] = useCookies(['access_token', 'loged','currentUserName', 'user_or_studio']);
    var token = cookies.access_token;
    var decoded = jwt_decode(token);
    var username=decoded.given_name;
    return (
        <div className="userPanel">
            <Navbar />
            {cookies.loged==='1'&&<div className="userPanelContent">
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
                            Pomoc
                        </div>
                        <Link to="/accountInfo"><div className="userPanelOptions">
                            Ustawienia
                        </div></Link>
                    </div>
                </div>
                <div className="userPanelRightContent">
                    PRZEGLĄD AKTYWNOŚCI:
                    <div className="userPanelActivities">

                        <Activities />
                        <Activities />
                        <Activities />
                        <Activities />
                        <Activities />
                    </div>
                </div>
            </div>}
            <MainFooter />
        </div >
    )
}

export default UserPanel
