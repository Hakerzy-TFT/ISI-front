import React from 'react'
import './dayCategory.css'

function dayCategory() {
    return (
        <div className="dayCategory">
            <div className="dayCategoryHeader"><h1>POLECANE GRY</h1></div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={process.env.PUBLIC_URL+'/assets/dayCategory/CODBO.jpg'} class="d-block w-100" alt="1"/>
                    </div>
                    <div class="carousel-item">
                        <img src={process.env.PUBLIC_URL+'/assets/dayCategory/coj.jpg'} class="d-block w-100" alt="2" />
                    </div>
                    <div class="carousel-item">
                        <img src={process.env.PUBLIC_URL+'/assets/dayCategory/gta.jpg'}class="d-block w-100" alt="3" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default dayCategory
