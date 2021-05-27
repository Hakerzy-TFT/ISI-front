import React from 'react';
import './accountInfo.css';
import Navbar from '../../../commons/navbar/Navbar';
import MainFooter from '../../../commons/mainFooter/mainFooter';
import Activities from '../activities/activities';
import { ShowForPermission } from '../../../ShowForPermissions';
import {
    Link
} from 'react-router-dom';

function accountInfo() {
    return (
        <div className="accountInfo">
            <Navbar />
            <div className="accountInfoContent">
                <div className="accountInfoLeftContent">
                    <i class="fas fa-wheelchair fa-3x"></i>
                    <div className="accountInfoInfos">
                        <div className="userPanelLevel">
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
                <div className="accountInfoRightContent">
                    Informacje:
                    <div className="accountInfoActivities">
                        <label className="labelAccountInfo">Adres email:</label>
                        <input type="text" name="peas" value="example@example.com"/><br/><br/>
                        <label className="labelAccountInfo">Zmień hasło:</label>
                        <input type="password" name="peas" value=""/><br/>
                        <label className="labelAccountInfo">Powtórz hasło:</label>
                        <input type="repeatpassword" name="peas" value=""/><br/>
                        </div>
                    </div>
                </div>
                <MainFooter />
            </div>
    )
}

export default accountInfo
