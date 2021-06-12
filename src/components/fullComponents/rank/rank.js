import React from 'react';
import './rank.css';
import Navbar from '../../../components/commons/navbar/Navbar';
import MainFooter from '../../../components/commons/mainFooter/mainFooter';
import RankElement from './rankElement/rankElement';
import {
    Link
} from 'react-router-dom';
function rank() {
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
                        Sortuj:
                        <div className="rankSelectDiv"><select className="RankSelect" id="rankSort">
                            <option value="BestRated">Najwyżej oceniane</option>
                            <option value="Newest">Najnowsze</option>
                            <option value="Testing">Testowane</option>
                        </select></div>
                        Typ:
                        <div className="rankSelectDiv"><select id="rankSort">
                            <option value="BestRated">Najwyżej oceniane</option>
                            <option value="Newest">Najnowsze</option>
                            <option value="Testing">Testowane</option>
                        </select></div>
                        Rodzaj:
                        <div className="rankSelectDiv"><select id="rankSort">
                            <option value="BestRated">Najwyżej oceniane</option>
                            <option value="Newest">Najnowsze</option>
                            <option value="Testing">Testowane</option>
                        </select></div>
                        Platformy:
                        <select id="rankSort">
                            <option value="BestRated">Najwyżej oceniane</option>
                            <option value="Newest">Najnowsze</option>
                            <option value="Testing">Testowane</option>
                        </select>
                        Dostępność:
                        <div className="rankSelectDiv"><select id="rankSort">
                            <option value="BestRated">Najwyżej oceniane</option>
                            <option value="Newest">Najnowsze</option>
                            <option value="Testing">Testowane</option>
                        </select></div>
                    </div>

                    <div className="rankRightContent">
                        <Link to="/game"><RankElement /></Link>
                        <RankElement />
                        <RankElement />
                        <RankElement />
                        <RankElement />
                        <RankElement />
                        <RankElement />
                        <RankElement />

                    </div>
                </div>

            </div>
            <MainFooter />
        </div>
    )
}

export default rank
