import React from 'react';
import './explore.css';
import Navbar from '../../../components/commons/navbar/Navbar';
import MiniatureGame from '../../../components/commons/miniatureGame/miniatureGame';
import MainFooter from '../../../components/commons/mainFooter/mainFooter';
function explore() {
    return (
        <div className="explore">
            <Navbar />
                <MiniatureGame className="miniatureContentInExplore" />
                <MiniatureGame className="miniatureContentInExplore" />
                <MiniatureGame className="miniatureContentInExplore" />
                <MiniatureGame className="miniatureContentInExplore" />
                <MainFooter/>
            </div>
    )
}

export default explore
