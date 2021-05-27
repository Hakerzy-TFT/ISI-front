import React from 'react';
import { Link } from 'react-router-dom';
import './mainFooter.css';
function mainFooter() {
    return (
        <footer>
            <div className="mainFooter">
                <img src={process.env.PUBLIC_URL + '/favicon_with_txt.png'} className="favIcon" />
                <br />
                <div className="onePointThreeTab">
                    <div className="onePointThreeColumn">
                        <Link to='/aboutUs' className="link">O NAS</Link> <br />
                        <Link to='/support' className="link">WSPARCIE</Link>
            </div>
                    <div className="onePointThreeColumn">
                    <Link to='/legalInfo' className="link">INFORMACJE PRAWNE</Link> <br />
                        <Link to='/termsOfUse' className="link">WARUNKI UŻYTKOWANIA</Link>
                    </div>
                    <div className="onePointThreeColumn">
                        <br />
                        <Link to='/contact' className="link"> KONTAKT</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default mainFooter
