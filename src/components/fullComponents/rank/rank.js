import React, { useEffect, useState } from 'react';
import './rank.css';
import Navbar from '../../../components/commons/navbar/Navbar';
import MainFooter from '../../../components/commons/mainFooter/mainFooter';
import RankElement from './rankElement/rankElement';
import {
    Link
} from 'react-router-dom';
import axios from 'axios';
class rankingElement {
    constructor(id, gameId, imgSrc, title, platform, rating) {
        this.id = id;
        this.gameId = gameId;
        this.imgSrc = imgSrc;
        this.title = title;
        this.platform = platform;
        this.rating = rating;
    }
}
class rankOpt {
    constructor(criterium, platform, genre) {
        this.criterium = criterium;
        this.platform = platform;
        this.genre = genre;
    }
}

function Rank() {
    const [rankob, setrankob] = useState(null);
    const rankobject = [];
    const rankoptions = new rankOpt(null, null, null);
    useEffect(() => {
        axios.post('http://localhost:5001/api/Games/Rankings', rankoptions, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            var keys = Object.keys(response.data);
            keys.forEach(key => {
                rankobject.push(new rankingElement(key, response.data[key].id, response.data[key].imgSrc, response.data[key].title, response.data[key].platform, response.data[key].total_rating));
            });
            setrankob(rankobject);
        }
        );
    }, []);

    const onChange = (event) => {
        const rankoptions = new rankOpt(null, null, null);
        if (document.getElementById("rankSortCrit")) {
            rankoptions.criterium = document.getElementById("rankSortCrit").value;
        }
        if (document.getElementById("rankSortPlatform")) {
            rankoptions.platform = document.getElementById("rankSortPlatform").value;
        }
        if (document.getElementById("rankSortGenre")) { rankoptions.genre = document.getElementById("rankSortGenre").value; }
        axios.post('http://localhost:5001/api/Games/Rankings', rankoptions, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            var keys = Object.keys(response.data);
            keys.forEach(key => {
                rankobject.push(new rankingElement(key, response.data[key].id, response.data[key].imgSrc, response.data[key].title, response.data[key].platform, response.data[key].totalRating));
            });
            setrankob(rankobject);
        }
        ).catch(
            function () {
                setrankob(null);
            }
        )
    };


return (
    <div className="rank">
        <Navbar />
        <div className="rankBody">
            <div className="rankHeader">
                <div className="rankPopular">
                    Popularne
                </div>
                <div className="rankPopularContent">
                    Na tej stronie znajdziesz najbardziej popularne, najlepiej sprzedające się gry. Bądź na bierząco z rynkiem gier video oraz pozycjami w fazie testów
                </div>
            </div>
            <div className="rankContent">
                <div className="rankLeftContent">
                    Sortuj:<br />
                    <div className="rankSelectDiv"><select className="RankSelect" id="rankSortCrit" onChange={onChange} >
                        <option value="">Brak</option>
                        <option value="rating">Najwyżej oceniane</option>
                        <option value="date">Najnowsze</option>
                    </select></div>
                    Platformy:<br />
                    <select className="RankSelect" id="rankSortPlatform" onChange={onChange}>
                        <option value="">Brak</option>
                        <option value="PC">Komputer</option>
                        <option value="XBOX">Xbox</option>
                        <option value="PS">Play Station</option>
                    </select><br />
                    Gatunek:<br />
                    <div className="rankSelectDiv"><select className="RankSelect" id="rankSortGenre" onChange={onChange}>
                        <option value="">Brak</option>
                        <option value="Sports games">Gry sportowe</option>
                        <option value="Action">Gry akcji</option>
                        <option value="MMO RPG">MMO RPG</option>
                        <option value="Racing">Gry wyścigowe</option>
                        <option value="Strategy">Strategiczne</option>
                        <option value="Simulation">Gry symulacyjne</option>
                    </select></div>
                </div>

                <div className="rankRightContent">
                    {rankob ? rankob.map(obje => <Link to={{
                        pathname: "/game",
                        state: { gameId: obje.gameId },
                    }}><RankElement id={obje.id} gameId={obje.gameId} imgSrc={obje.imgSrc} title={obje.title} rating={obje.rating} platform={obje.platform} /></Link>) : <h1>Brak gier w bazie</h1>}

                </div>
            </div>

        </div>
        <MainFooter />
    </div>
)
}

export default Rank
