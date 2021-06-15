import React, { Component,useEffect,useState } from 'react';
import './userPanel.css';
import Navbar from '../../../commons/navbar/Navbar';
import MainFooter from '../../../commons/mainFooter/mainFooter';
import Activities from '../activities/activities';
import {
    Link
} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { useCookies } from 'react-cookie';
import axios from 'axios';

class ActivitiesCont{
    constructor(id,ActivityTitle,Day,IssueTitle,Review,TargetGame){
        this.id=id;
        this.ActivityTitle=ActivityTitle;
        this.Day=Day;
        this.IssueTitle=IssueTitle;
        this.Review=Review;
        this.TargetGame=TargetGame;
    }
}

function UserPanel() {
    const [cookies, setCookie] = useCookies(['access_token', 'loged','currentUserName', 'user_or_studio']);
    var token = cookies.access_token;
    var decoded = jwt_decode(token);
    var username = decoded.given_name;
var mainGameObject=[];
    const [actob, setActob] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:5001/api/Users/profile/'+decoded.userId , {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            var keys = Object.keys(response.data.Activities);
            keys.forEach(key => {
                mainGameObject.push(new ActivitiesCont(key,response.data.Activities[key].ActivityTitle,response.data.Activities[key].Day,response.data.Activities[key].IssueTitle,response.data.Activities[key].Review,response.data.Activities[key].TargetGame));
            });
            setActob(mainGameObject);
        }
        );
    }, []);

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
                            <hr/>
                        </div>
                        <Link to="/accountInfo"><div className="userPanelOptions">
                            Ustawienia
                        </div></Link>
                    </div>
                </div>
                <div className="userPanelRightContent">
                    PRZEGLĄD AKTYWNOŚCI:
                    <div className="userPanelActivities">
                    {actob ? actob.map(obje => <Activities  id={obje.id} ActivityTitle={obje.ActivityTitle} Day={obje.Day} IssueTitle={obje.IssueTitle} Review={obje.Review} TargetGame={obje.TargetGame} />) : <h1>Brak atywności w bazie</h1>}
                    </div>
                </div>
            </div>}
            <MainFooter />
        </div >
    )
}

export default UserPanel
