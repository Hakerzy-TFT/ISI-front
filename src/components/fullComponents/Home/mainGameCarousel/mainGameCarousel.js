import React,{useEffect,useState} from 'react';
import './mainGameCarousel.css';
import {
    Link
} from 'react-router-dom';
import axios from 'axios';

class MainGame{
    constructor(Id,Title,ImgSrc){
        this.Id=Id;
        this.Title=Title;
        this.ImgSrc=ImgSrc;
    }
}

function MainGameCarousel() {
    
    const [maingameob, setmainGameob] = useState();
    useEffect(() => {
        axios.get(`http://localhost:5001/api/Games/Recommended`, {
            headers: {
                'Content-Type': 'applimaingameobion/json'
            }
        }).then(response => {
            console.log(response.data);
            setmainGameob(new MainGame(response.data[0].Id,response.data[0].Title,response.data[0].ImgSrc));
        }
        );
    }, []);


    return (
        <div className="mainGameCarousel">
            {maingameob&&<div>
            <img className="cardImage" src={maingameob.ImgSrc} alt="IMG NOT LOADED" />
            <div className="dataCarousel">
                <div className="mainGameCarouselText">{maingameob.Title}</div>
                <Link to={{
                    pathname: "/game",
                    state: { gameId:maingameob.Id },
                }} ><button className="more btn btn-warning">DOWIEDZ SIĘ WIĘCEJ</button></Link>
                <Link to={{
                    pathname: "/lotery",
                    state: { gameName: maingameob.Title },
                }} ><button className="tests btn btn-warning">TESTY WSTĘPNE</button></Link>
        </div>
        </div>}
        </div >
    )
}
export default MainGameCarousel