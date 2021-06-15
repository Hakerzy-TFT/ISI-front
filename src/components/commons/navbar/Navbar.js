import React from 'react';
import './Navbar.css';
import {
    Link
} from 'react-router-dom';
import DropdownMenu from './dropdownMenu/dropdownMenu';
import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";
function Navbar() {

    const history = useHistory();
    const [cookies, setCookie,removeCookie] = useCookies(['access_token', 'loged','currentUserName', 'user_or_studio']);
    function Logout(){
        history.push("/");
        removeCookie('access_token');
        removeCookie('loged');
        removeCookie('currentUserName');
        removeCookie('user_or_studio');
        
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
                    {cookies.loged==='1'&&<button className="login btn-dark" onClick={Logout}>   WYLOGUJ SIĘ   </button>} 
                    </div>
            
                    {cookies.loged==='1'&&<DropdownMenu/>}
                </div >
                {cookies.loged==='1'&&cookies.user_or_studio==="user"&&<Link to="/userPanel">< i className="fas fa-user fa-2x" > </i></Link>}
                {cookies.loged==='1'&&cookies.user_or_studio==="studio"&&<Link to="/studioPanel">< i className="fas fa-user fa-2x" > </i></Link>}
            </div>
        </div >
    )
}

export default Navbar