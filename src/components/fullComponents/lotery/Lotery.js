import React from 'react';
import './lotery.css';
import Navbar from '../../commons/navbar/Navbar';
import MainFooter from '../../commons/mainFooter/mainFooter';
import {
    useLocation
} from 'react-router-dom';
function Lotery() {
    const location = useLocation();
    const title = location.state?.title;
    return (
        <div className="lotery">
            <Navbar />
            <div className="loteryBody">
                <div className="loteryHeader">
                {title}
                </div>
                <div className="loteryContent">

                Weź udział w loterii. Masz szansę wygrać klucz dostępowy dla wersji alpha gry {title}.<br/>
                <button id="1000coins" type="button" className="btn btn-warning btn-circle btn-xl" >Weź udział w loterii</button>
                </div>

            </div>
            <MainFooter />
        </div>
    )
}

export default Lotery
