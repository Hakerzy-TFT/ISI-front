import React from 'react';
import './studioNavbar.css';

function studioNavbar(props) {
    return (
        <div className="studioNavbar">
            {props.name}
        </div>
    )
}

export default studioNavbar
