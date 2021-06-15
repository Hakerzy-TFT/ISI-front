import React, { useEffect, useState } from 'react';
import './game.css';
import Navbar from '../../commons/navbar/Navbar';
import MainFooter from '../../commons/mainFooter/mainFooter';
import {
    Link, useLocation
} from 'react-router-dom';
import Review from '../review/Review';
import axios from 'axios';
class gameElement {
    constructor(id,title, description, releaseDate, postedDate, totalRating, imgSrc,img1Src, header,fontColor,studio) {
        this.id = id;
        this.title=title;
        this.description = description;
        this.releaseDate = releaseDate;
        this.postedDate = postedDate;
        this.totalRating = totalRating;
        this.imgSrc = imgSrc;
        this.img1Src = img1Src;
        this.header = header;
        this.fontColor = fontColor;
        this.buttonColor = "green";
        this.backgroundColor = "#d24dff";
        this.studio = studio;
    }
}

function Game() {
    const location = useLocation();
    const gameId = location.state?.gameId;

    const [gameob, setGameob] = useState();
    useEffect(() => {
        axios.get(`http://localhost:5001/api/Games/`+gameId, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response.data);
            var can=new gameElement(response.data.id,response.data.title, response.data.description, response.data.releaseDate, response.data.postedDate, response.data.totalRating, response.data.imgSrc,response.data.img1Src,response.data.header,response.data.fontColor,response.data.studioName);
            setGameob(can);
        }
        );
    }, []);


    return (
        <div className="game">
            <Navbar />
            {gameob ?  
                <div className="gameBody" style={{ backgroundImage:`url(${gameob.imgSrc})`, backgroundSize: "cover", color: gameob.fontColor }}>
                <div className="gameHeader" >
                    <div className="gameHeaderLeft">
                        {gameob.title}
                    </div>
                    <div className="gameHeaderRight">
                        {gameob.totalRating}/10
                    </div>

                </div>
                <div className="gameDate">
                    {gameob.header}<br />
                    Stworzono w {Date(gameob.releaseDate.replace(/-/g,"/"))}, na naszej stronie od {Date(gameob.postedDate.replace(/-/g,"/"))}<br />
                    Wyprodukowano przez <Link to={{
                        pathname: "/studio",
                        state: { studio: gameob.studio },
                    }}>{gameob.studio}</Link><br />

                    <span className="gameImg"><img src={gameob.img1Src} className="center" alt="IMG NOT LOADED"></img></span><br />
                    {gameob.description}<br />
                    <Link to={{
                        pathname: "/lotery",
                        state: { gameName: gameob.title },
                    }} ><button type="button" className="btn btn-primary center" style={{ backgroundColor: gameob.buttonColor }}>Weź udział w loterii kluczy</button></Link><hr/>
                    <Link to={{
                        pathname: "/bug",
                        state: { gameName: gameob.title,
                                gameId:gameId },
                    }} ><button type="button" className="btn btn-danger center" >Zgłoś błąd gry</button></Link>
                </div>
                <br/>
                <Review gameId={gameId}/>
            </div>
                
                
                
                : <h1>Ładowanie</h1>}

            
            <MainFooter />
        </div>
    )
}

export default Game
