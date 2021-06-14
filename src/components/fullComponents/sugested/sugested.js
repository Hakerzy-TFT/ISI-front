import React from 'react';
import './sugested.css';
import Navbar from '../../../components/commons/navbar/Navbar';
import MainFooter from '../../../components/commons/mainFooter/mainFooter';
function sugested() {
    return (
        <div className="sugested">
            <Navbar />
            <div className="sugestedImage">
            <div className="circle">
                <div className="circleText">Stań się legendą<br></br> postapokalistycznych <br></br> pustkowi</div>
                <div className="secCircleText">DOWIEDZ SIĘ WIĘCEJ NA<br></br>gamespace.com/thelastofuspart2
                <br></br>
                <br></br>
                <a className="watchTrailer" href="#example">Obejrzyj trailer</a>
                </div>
                </div>
                <button className="findOut btn btn-warning">DOWIEDZ SIĘ WIĘCEJ</button>
            </div>
            <div className="sugestedContent">
                <div className="title" id="example">THE LAST OF US<br></br>PART II</div>
            </div>
            <div className="trailerContent">
            <iframe className="trailerVideo" width="50%" height="90%" src="https://www.youtube.com/embed/qPNiIeKMHyg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <MainFooter />
        </div>
    )
}

export default sugested
