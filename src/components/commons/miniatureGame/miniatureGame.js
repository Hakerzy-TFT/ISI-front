import React from 'react'
import './miniatureGame.css'

function miniatureGame() {
    return (
        <div className="miniatureGame">
            <div className="miniatureGameImgDiv">
            <img className="miniatureGameImg" src={process.env.PUBLIC_URL+'/assets/miniatureGame/assasin.jpg'} alt="IMG NOT LOADED"/>
            </div>
            <div className="miniatureGameTextDiv">
            Lorem ipsum dolor sit amet, consectetur adip
            </div>
        </div>
    )
}

export default miniatureGame
