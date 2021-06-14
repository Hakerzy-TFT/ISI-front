import React from 'react';
import './Navbar.css';
import {
    Link
} from 'react-router-dom';
import DropdownMenu from './dropdownMenu/dropdownMenu';
import { useCookies } from 'react-cookie';
function Navbar() {

    const [cookies,removeCookie] = useCookies(['access_token','loged']);
    function logout(){
        removeCookie('access_token');
        removeCookie('loged');
    }
    return (
        <div className="Navbar">
            <div className="gamespace">  <Link to="/"><button className="rank btn-dark" ><img src={process.env.PUBLIC_URL+'/favicon_with_txt.png'} className="favIconNavbar" alt="IMG NOT LOADED"/></button></Link></div>
            <div className="navi">
                <Link to="/rank"><button className="naviButton btn-dark" > RANKINGI </button></Link>
                <Link to="/sugested"><button className="naviButton btn-dark" > POLECANE </button></Link>
                <Link to="/explore"> <button className="naviButton btn-dark" > EKSPLORUJ </button></Link>
            </div >
            <div className="rightPane" >
                <div className="loginPane" >
                <div className="fa-user-ico">
                    {cookies.loged!=='1'&&<Link to="/login"><button className="login btn-dark" >   ZALOGUJ SIĘ   </button></Link>} 
                    {cookies.loged==='1'&&<button className="login btn-dark" onClick={logout}>   WYLOGUJ SIĘ   </button>} 
                    </div>
            
                    {cookies.loged==='1'&&<DropdownMenu/>}
                </div >
                <Link to="/userPanel">< i className="fas fa-user fa-2x" > </i></Link>
            </div>
        </div >
    )
}

export default Navbar