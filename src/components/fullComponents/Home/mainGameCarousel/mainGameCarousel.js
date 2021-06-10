import React from 'react'
import './mainGameCarousel.css'

function mainGameCarousel() {
    return(
        <div className="mainGameCarousel">
            <img className="cardImage" src={process.env.PUBLIC_URL+'/assets/mainGameCarousel/assasin.jfif'} alt="IMG NOT LOADED"/>
            <div className="dataCarousel">
            <div className="mainGameCarouselText">Assasin's Creed</div>
            <button className="more btn btn-warning">DOWIEDZ SIĘ WIĘCEJ</button>
            <button className="tests btn btn-warning">TESTY WSTĘPNE</button>
            </div>
        </div>
    )
}
export default mainGameCarousel