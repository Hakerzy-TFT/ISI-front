import React from 'react';
import './Navbar.css';
import {
    Link
} from 'react-router-dom';
import DropdownMenu from './dropdownMenu/dropdownMenu';
function Navbar() {
    return (
        <div className="Navbar">
            <div className="gamespace">  <Link to="/"><button className="rank btn-dark" ><img src={process.env.PUBLIC_URL+'/favicon_with_txt.png'} className="favIconNavbar"/></button></Link></div>
            <div className="navi">
                <Link to="/rank"><button className="naviButton btn-dark" > RANKINGI </button></Link>
                <Link to="/sugested"><button className="naviButton btn-dark" > POLECANE </button></Link>
                <Link to="/explore"> <button className="naviButton btn-dark" > EKSPLORUJ </button></Link>
            </div >
            <div className="rightPane" >
                <div className="loginPane" >
                <div className="fa-user-ico"><Link to="/login"><button className="login btn-dark" >   ZALOGUJ SIĘ   </button></Link> 
                    <Link to="/userPanel">< i className="fas fa-user fa-2x" > </i></Link></div>
            
                    <DropdownMenu/>
                </div >
                
            </div>
        </div >
    )
}

export default Navbar