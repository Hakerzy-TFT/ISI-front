import React from 'react';
import './studioPanel.css';
import Navbar from '../../../commons/navbar/Navbar';
import MainFooter from '../../../commons/mainFooter/mainFooter';
import {
    Link
} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { useCookies } from 'react-cookie';

function StudioPanel() {
    const [cookies, setCookie] = useCookies(['access_token', 'loged','currentUserName', 'user_or_studio']);
    var token = cookies.access_token;
    
    return (
        <div className="userPanel">
            <Navbar />
            {cookies.loged==='1'&&<div className="userPanelContent">
                <div className="userPanelLeftContent">
                    <i className="fas fa-wheelchair fa-3x"></i>
                    <div className="userPanelInfos">

                        <div className="userPanelLevel">
                            {cookies.currentUserName}<br />
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

                    </div>
                </div>
            </div>}
            <MainFooter />
        </div >
    )
}

export default StudioPanel
