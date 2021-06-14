import React from 'react';
import './dayCategory.css';

function dayCategory() {
    return (
        <div className="dayCategory">
            <div className="dayCategoryHeader"><h1>POLECANE GRY</h1></div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={process.env.PUBLIC_URL+'/assets/dayCategory/CODBO.jpg'} className="d-block w-100" alt="1"/>
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL+'/assets/dayCategory/coj.jpg'} className="d-block w-100" alt="2" />
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL+'/assets/dayCategory/gta.jpg'}className="d-block w-100" alt="3" />
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
            </div>
        </div>
    )
}

export default dayCategory
