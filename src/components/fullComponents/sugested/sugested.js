import React from 'react';
import './sugested.css';
import Navbar from '../../../components/commons/navbar/Navbar';
import MainFooter from '../../../components/commons/mainFooter/mainFooter';
function sugested() {
    return (
        <div>
            <Navbar/>
            <div className="sugestedContent">
            Polecane
            </div>
            
            <MainFooter/>
        </div>
    )
}

export default sugested