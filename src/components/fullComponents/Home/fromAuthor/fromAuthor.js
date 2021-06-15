import React, { useEffect, useState } from 'react';
import './fromAuthor.css';
import MiniatureGame from '../../../commons/miniatureGame/miniatureGame';
import {
    Link
} from 'react-router-dom';
import axios from 'axios';
class exploreElement {
    constructor(Id, gameId, ImgSrc, Title, TotalRating, Description) {
        this.Id = Id;
        this.gameId = gameId;
        this.ImgSrc = ImgSrc;
        this.Title = Title;
        this.platform = "PC";
        this.TotalRating = TotalRating;
        this.Description = Description;
    }
}
function FromAuthor() {


    const [exploreob, setExploreob] = useState(null);
    const exploreobject = [];
    useEffect(() => {
        axios.get('http://localhost:5001/api/Games/Recommended', {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            var keys = Object.keys(response.data);
            keys.forEach(key => {
                exploreobject.push(new exploreElement(key, response.data[key].Id, response.data[key].ImgSrc, response.data[key].Title, response.data[key].TotalRating, response.data[key].Description));
            });
            setExploreob(exploreobject);
        }
        );
    }, []);

    return (
        <div className="fromAuthor">
            OD TWÓRCÓW<br />
            <div className="fromAuthorContent">
                <div className="fromAuthorOption">
                    Spójrz na to, co możesz spotkać na naszej stronie
                </div>
            </div>
            <div className="miniatureContent">
                {exploreob && <div className="miniatureContentGame">
                    <Link to={{
                        pathname: "/game",
                        state: { gameId: exploreob[0].gameId }
                    }}><MiniatureGame className="miniatureContentGame" id={exploreob[0].Id} gameId={exploreob[0].gameId} imgSrc={exploreob[0].ImgSrc} title={exploreob[0].Title} rating={exploreob[0].TotalRating} platform={exploreob[0].platform} description={exploreob[0].Description} /></Link>{exploreob && <div className="miniatureContentGame">
                    </div>}
                    <Link to={{
                        pathname: "/game",
                        state: { gameId: exploreob[1].gameId }
                    }}><MiniatureGame className="miniatureContentGame" id={exploreob[1].Id} gameId={exploreob[1].gameId} imgSrc={exploreob[1].ImgSrc} title={exploreob[1].Title} rating={exploreob[1].TotalRating} platform={exploreob[1].platform} description={exploreob[1].Description} /></Link>
                </div>}
            </div>
        </div>

    )
}

export default FromAuthor
