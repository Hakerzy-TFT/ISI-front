import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className="Navbar">
            <div className="gamespace">  <button className="rank naviButton btn btn-dark" >GAMESPACE </button></div>
            <div className="navi">
                <button className="rank naviButton btn btn-dark" > RANKINGI </button>
                <button className="sugested naviButton btn-dark" > POLECANE </button>
                <button className="explore naviButton btn-dark" > EKSPLORUJ </button>
            </div >
            <div className="rightPane" >
                <div className="icons" >
                    <button className="btn ico" > < i className="fas fa-search" > </i></button>
                    <button className="btn ico" > < i className="fas fa-user" > </i></button>
                </div> <div className="loginPane" >
                    <button className="login btn-dark" > ZALOGUJ SIĘ </button>
                </div >
            </div>
        </div >
    )
}

export default Navbar