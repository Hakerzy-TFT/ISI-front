import React from 'react';
import './rank.css';
import Navbar from '../../../components/commons/navbar/Navbar';
import MainFooter from '../../../components/commons/mainFooter/mainFooter';
function rank() {
    return (
        <div className="rank">
            <Navbar />
            <div className="rankBody">
            Ranking
            </div>
                <MainFooter />

        </div>
    )
}

export default rank
