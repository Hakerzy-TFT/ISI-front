import React from 'react';
import './rankElement.css';

function rankElement() {
    return (
        <div className="rankElement">
            <div className="rankElementNumber">
                1
            </div>
            <div className="rankElementView">
            <img className="rankElementImg" src={process.env.PUBLIC_URL+'/assets/backgrounds/Biomutant.jpg'} alt="IMG NOT LOADED"/ >
            </div>
            <div className="rankElementTitle">
            Biomutant
            </div>
            <div className="rankElementPlatforms">
            <i className="fab fa-xbox fa-3x"></i>
            <i className="fab fa-steam fa-3x"></i>
            </div>
            <div className="rankElementKeys">
                20/100
            </div>
            <div className="rankElementForum">
                <button type="button" className="btn btn-warning">Wyświetl forum</button>
            </div>
        </div>
    )
}

export default rankElement
