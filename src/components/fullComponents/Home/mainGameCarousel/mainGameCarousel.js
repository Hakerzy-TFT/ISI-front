import React from 'react'
import './mainGameCarousel.css'

function mainGameCarousel() {
    return(
        <div className="mainGameCarousel">
            <img className="cardImage" src={process.env.PUBLIC_URL+'/assets/mainGameCarousel/assasin.jfif'} />
            <div className="dataCarousel">
            <button className="more btn btn-warning">DOWIEDZ SIĘ WIĘCEJ</button>
            <button className="tests btn btn-warning">TESTY WSTĘPNE</button>
            </div>
        </div>
    )
}
export default mainGameCarousel