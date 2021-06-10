import React, { Component,useEffect } from 'react';
import './userPanel.css';
import Navbar from '../../../commons/navbar/Navbar';
import MainFooter from '../../../commons/mainFooter/mainFooter';
import Activities from '../activities/activities';
import { ShowForPermission } from '../../../ShowForPermissions';
import {
    Link
} from 'react-router-dom';


function UserPanel() {
    return (
        <div className="userPanel">
            <Navbar />
            <div className="userPanelContent">
                <div className="userPanelLeftContent">
                    <i className="fas fa-wheelchair fa-3x"></i>
                    <div className="userPanelInfos">

                        <div className="userPanelLevel">
                            {localStorage["username"]}<br />
                            14<br />
                        Poziom społeczności
                        </div>
                        <Link to="/accountInfo"><div className="userPanelOptions">
                            Informacje o koncie
                        </div></Link>
                        <div className="userPanelOptions">
                            Pomoc
                        </div>
                        <div className="userPanelOptions">
                            Ustawienia
                        </div>
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
            </div>
            <MainFooter />
        </div >
    )
}

export default UserPanel
