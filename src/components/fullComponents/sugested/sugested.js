import React, { useEffect, useState } from 'react';
import './sugested.css';
import Navbar from '../../../components/commons/navbar/Navbar';
import MainFooter from '../../../components/commons/mainFooter/mainFooter';
import {
    Link
} from 'react-router-dom';
import axios from 'axios';
class sugestedElement {
    constructor(Id, gameId, ImgSrc, Title, Img3Src, Header) {
        this.Id = Id;
        this.gameId = gameId;
        this.ImgSrc = ImgSrc;
        this.Title = Title;
        this.platform = "PC";
        this.Img3Src = Img3Src;
        this.Header = Header;
    }
}
function Sugested() {
    const [sugestedob, setsugestedob] = useState(null);
    const sugestedobject = [];
    useEffect(() => {
        axios.get('http://localhost:5001/api/Games/Recommended', {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            var keys = Object.keys(response.data);
            keys.forEach(key => {
                sugestedobject.push(new sugestedElement(key, response.data[key].Id, response.data[key].ImgSrc, response.data[key].Title, response.data[key].Img3Src, response.data[key].Header));
            });
            setsugestedob(sugestedobject);
        }
        );
    }, []);


    return (
        <div className="sugested">
            <Navbar />
            {sugestedob &&
            <div><div className="sugestedImage" style={{ backgroundImage: `url(${sugestedob[0].ImgSrc})`}}>
                <div className="circle">
                    <div className="circleText"><br/>{sugestedob[0].Header}</div>
                    <div className="secCircleText">DOWIEDZ SIĘ WIĘCEJ NA<br></br>gamespace.com
                        <br></br>
                        <br></br>
                        <a className="watchTrailer" href="#example">Obejrzyj trailer</a>
                    </div>
                </div>
                <Link to={{
                        pathname: "/game",
                        state: { gameId: sugestedob[0].gameId },
                    }}><button className="findOut btn btn-warning">DOWIEDZ SIĘ WIĘCEJ</button></Link>
            </div>
            <div className="sugestedContent">
                <div className="title" id="example">{sugestedob[0].Title}<br></br></div>
            </div>
            <div className="trailerContent">
                <iframe className="trailerVideo" width="50%" height="90%" src={sugestedob[0].Img3Src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </div>}
            <MainFooter />
        </div>
    )
}

export default Sugested
