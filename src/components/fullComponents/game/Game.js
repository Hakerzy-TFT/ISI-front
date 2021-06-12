import React from 'react';
import './game.css';
import Navbar from '../../commons/navbar/Navbar';
import MainFooter from '../../commons/mainFooter/mainFooter';
import {
    Link,useLocation
} from 'react-router-dom';
function Game() {
    const location = useLocation();
    const title = location.state?.title;
    const description = "description";
    const relaseDate = "relaseDate";
    const postedDate = "postedDate";
    const totalRating = "8.5";
    const imgSrc = "/assets/backgrounds/Biomutant.jpg";
    const img1Src = "/assets/dayCategory/gta.jpg";
    const header = "header";
    const fontColor = "white";
    const buttonColor = "green";
    const backgroundColor = "#d24dff";
    const studio="studio";
    return (
        <div className="game">
            <Navbar />
            <div className="gameBody" style={{ backgroundImage: `url(${imgSrc})`, backgroundSize: "cover", color: fontColor }}>
                <div className="gameHeader" >
                    <div className="gameHeaderLeft">
                        {title}
                    </div>
                    <div className="gameHeaderRight">
                        {totalRating}/10
                    </div>

                </div>
                <div className="gameDate">
                    {header}<br />
                    Stworzono w {relaseDate}, na naszej stronie od {postedDate}<br />
                    Wyprodukowano przez {studio}<br />

                    <span className="gameImg"><img src={img1Src} className="center" alt="IMG NOT LOADED"></img></span><br />
                    {description}<br />
                    <Link to={{
                        pathname: "/lotery",
                        state: { title: title },
                    }} ><button type="button" class="btn btn-primary center" style={{ backgroundColor: buttonColor }}>Weź udział w loterii kluczy</button></Link>
                </div>
            </div>
            <MainFooter />
        </div>
    )
}

export default Game
