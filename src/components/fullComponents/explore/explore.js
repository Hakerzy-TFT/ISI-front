import React, { useEffect, useState } from 'react';
import './explore.css';
import Navbar from '../../../components/commons/navbar/Navbar';
import MiniatureGame from '../../../components/commons/miniatureGame/miniatureGame';
import MainFooter from '../../../components/commons/mainFooter/mainFooter';
import {
    Link
} from 'react-router-dom';
import axios from 'axios';

class exploreElement {
    constructor(id, gameId, imgSrc, title, platform, rating, description) {
        this.id = id;
        this.gameId = gameId;
        this.imgSrc = imgSrc;
        this.title = title;
        this.platform = platform;
        this.rating = rating;
        this.description = description;
    }
}

function Explore() {
    const [exploreob, setExploreob] = useState(null);
    const exploreobject = [];
    useEffect(() => {
        axios.get('http://localhost:5001/api/Games/', {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            var keys = Object.keys(response.data);
            keys.forEach(key => {
                exploreobject.push(new exploreElement(key, response.data[key].id, response.data[key].imgSrc, response.data[key].title, response.data[key].gamePlatform, response.data[key].totalRating, response.data[key].description));
            });
            setExploreob(exploreobject);
        }
        );
    }, []);




    return (
        <div className="explore">
            <Navbar />
            <div className="exploreContent">
                {exploreob ? exploreob.map(obje => <Link to={{
                    pathname: "/game",
                    state: { gameId:obje.gameId },
                }}><MiniatureGame className="miniatureContentInExplore" id={obje.id} gameId={obje.gameId} imgSrc={obje.imgSrc} title={obje.title} rating={obje.rating} platform={obje.platform} description={obje.description} /></Link>) : <h1>Brak gier w bazie</h1>}
            </div>
            <MainFooter />
        </div>
    )
}

export default Explore
