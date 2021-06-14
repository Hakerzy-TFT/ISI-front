import React from 'react';
import './miniatureGame.css';

function miniatureGame(props) {

    return (
        <div className="miniatureGame">
            <div className="miniatureGameImgDiv">
            <img className="miniatureGameImg" src={props.imgSrc} alt="IMG NOT LOADED"/>
            </div>
            <div className="miniatureGameTextDiv">
            {props.title}<br/>
            {props.description}
            </div>
        </div>
    )
}

export default miniatureGame
