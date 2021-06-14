import React from 'react';
import './contact.css';
import Navbar from '../../../components/commons/navbar/Navbar';
import MainFooter from '../../../components/commons/mainFooter/mainFooter';
function contact() {
    return (
        <div className="contact">
            <Navbar />
            <div className="contactContent">
                <i className="fas fa-copyright"></i> Wszelkie prawa zastrzeżone
            <br />
                <a href="https://github.com/Hakerzy-TFT">Zajrzyj na github</a>
                <br />
                <h2>Autorzy:</h2>
                <br />
                <h3>Piotr Mróz<br />Kacper Płusa<br />Daniel Szwajkowski<br />Rafał Robak<br /></h3>
             Projekt wspomagany przez Politechnikę Świętokrzyską<br />
            </div>
            <MainFooter />
        </div>
    )
}

export default contact
