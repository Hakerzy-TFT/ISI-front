import React,{useEffect,useState} from 'react';
import './dayCategory.css';
import {
    Link
} from 'react-router-dom';
import axios from 'axios';

class MainGame{
    constructor(Id,Title,ImgSrc){
        this.Id=Id;
        this.Title=Title;
        this.ImgSrc=ImgSrc;
    }}
function DayCategory() {

    const [maingameob, setmainGameob] = useState();
    var mainGameObject=[];
    useEffect(() => {
        axios.get(`http://localhost:5001/api/Games/Recommended`, {
            headers: {
                'Content-Type': 'applimaingameobion/json'
            }
        }).then(response => {
            var keys = Object.keys(response.data);
            keys.forEach(key => {
                mainGameObject.push(new MainGame(response.data[key].Id,response.data[key].Title,response.data[key].ImgSrc));
            });
            console.log(mainGameObject);
            setmainGameob(mainGameObject);
        }
        );
    }, []);

    return (
        <div className="dayCategory">
            <div className="dayCategoryHeader"><h1>POLECANE GRY</h1></div>
            {maingameob&&
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <Link to={{
                        pathname: "/game",
                        state: { gameId: maingameob[0].Id },
                    }}><img src={maingameob[0].ImgSrc} className="d-block w-100" alt="1"/></Link>
                    </div>
                    <div className="carousel-item">
                    <Link to={{
                        pathname: "/game",
                        state: { gameId: maingameob[1].Id },
                    }}><img src={maingameob[1].ImgSrc} className="d-block w-100" alt="2" /></Link>
                    </div>
                    <div className="carousel-item">
                    <Link to={{
                        pathname: "/game",
                        state: { gameId: maingameob[2].Id },
                    }}><img src={maingameob[2].ImgSrc}className="d-block w-100" alt="3" /></Link>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>}
        </div>
    )
}

export default DayCategory
