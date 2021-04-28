import React from 'react'
import './miniatureGame.css'

function miniatureGame() {
    return (
        <div className="miniatureGame">
            <img className="miniatureGameImg" src={process.env.PUBLIC_URL+'/assets/miniatureGame/assasin.jpg'}/>
        </div>
    )
}

export default miniatureGame
