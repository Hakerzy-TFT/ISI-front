import React from 'react';
import './dropdownMenu.css';
import {
    Link
} from 'react-router-dom';
function dropdownMenu() {
    return (
        <div className="dropdownMenu">
            <div className="dropdownMenuHeader">
                <div className="dropdownMenuUsername"><h1>Username</h1>Usertype</div>
                <div className="dropdownMenuIco"> <img className="miniatureGameImg" src={process.env.PUBLIC_URL+'/assets/backgrounds/Biomutant.jpg'}/>
           </div>
            </div>
            <div className="dropdownMenuOptions">
                <div className="dropdownMenuOpiton">Monety <div className="dropdownMenuCoins"> 6900</div></div>
                <div className="dropdownMenuOpiton">Biblioteka</div>
                <div className="dropdownMenuOpiton">Trofea</div>
                <div className="dropdownMenuOpiton"><Link to="/topUpCoins">Doładuj monety</Link> <div className="dropdownMenuCoins"><i class="fas fa-coins"></i></div></div>
            </div>
        </div>
    )
}

export default dropdownMenu
