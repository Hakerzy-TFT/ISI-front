import React from 'react';
import './rankElement.css';



function RankElement(props) {
    return (
        <div className="rankElement">
            <div className="rankElementNumber">
                {props.id}
            </div>
            <div className="rankElementView">
            <img className="rankElementImg" src={props.imgSrc} alt="IMG NOT LOADED"/ >
            </div>
            <div className="rankElementTitle">
            {props.title}
            </div>
            <div className="rankElementPlatforms">
            {props.platform==="XBOX"&&<i className="fab fa-xbox fa-3x"></i>}
            {props.platform==="PC"&&<i className="fas fa-desktop fa-3x"></i>}
            {props.platform==="PS"&&<i className="fab fa-playstation fa-3x"></i>}
            </div>
            <div className="rankElementKeys">
            {props.rating}/10
            </div>
            <div className="rankElementForum">
                <button type="button" className="btn btn-warning">Wyświetl forum</button>
            </div>
        </div>
    )
}

export default RankElement
