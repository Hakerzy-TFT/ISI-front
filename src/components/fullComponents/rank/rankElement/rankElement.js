import React from 'react';
import './rankElement.css';

function rankElement() {
    return (
        <div className="rankElement">
            <div className="rankElementNumber">
                1
            </div>
            <div className="rankElementView">
            <img className="miniatureGameImg" src={process.env.PUBLIC_URL+'/assets/backgrounds/Biomutant.jpg'}/>
            </div>
            <div className="rankElementTitle">
            Biomutant
            </div>
            <div className="rankElementPlatforms">
            <i class="fab fa-xbox fa-3x"></i>
            <i class="fab fa-steam fa-3x"></i>
            </div>
            <div className="rankElementKeys">
                20/100
            </div>
            <div className="rankElementForum">
                <button type="button" class="btn btn-warning">Wyświetl forum</button>
            </div>
        </div>
    )
}

export default rankElement
