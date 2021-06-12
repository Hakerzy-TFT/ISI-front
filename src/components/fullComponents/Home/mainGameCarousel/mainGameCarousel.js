import React from 'react';
import './mainGameCarousel.css';
import {
    Link
} from 'react-router-dom';

function mainGameCarousel() {
    const title = "Assasin's Creed";
    return (
        <div className="mainGameCarousel">
            <img className="cardImage" src={process.env.PUBLIC_URL + '/assets/mainGameCarousel/assasin.jfif'} alt="IMG NOT LOADED" />
            <div className="dataCarousel">
                <div className="mainGameCarouselText">{title}</div>
                <Link to={{
                    pathname: "/game",
                    state: { title: title },
                }} ><button className="more btn btn-warning">DOWIEDZ SIĘ WIĘCEJ</button></Link>
                <Link to={{
                    pathname: "/lotery",
                    state: { title: title },
                }} ><button className="tests btn btn-warning">TESTY WSTĘPNE</button></Link>
        </div>
        </div >
    )
}
export default mainGameCarousel