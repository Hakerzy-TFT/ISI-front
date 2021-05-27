import React from 'react';
import './legalInfo.css';
import Navbar from '../../../components/commons/navbar/Navbar';
import MainFooter from '../../../components/commons/mainFooter/mainFooter';
function legalInfo() {
    return (
        <div className="legalInfo">
            <Navbar />
            <div className="legalInfoContent">
                <h1>We need a lawyers</h1>
            </div>
            <MainFooter />
        </div>
    )
}

export default legalInfo
