import React from 'react';
import './termsOfUse.css';
import Navbar from '../../../components/commons/navbar/Navbar';
import MainFooter from '../../../components/commons/mainFooter/mainFooter';
function termsOfUse() {
    return (
        <div className="termsOfUse">
            <Navbar />
            <div className="termsOfUseContent">
                <ul>
                    <li>Zakładając konto na naszej platformie zgadzasz się na poniższe warunki użytkowania</li>
                    <li>Testując gry zobowiązujesz się do wydania opinii dla producenta</li>
                    <li>Opinie mają być wydawane zgodnie ze stanem faktycznym gry</li>
                    <li>Dołączając do społeczności zobowiązujesz się zachować kulturę wpisów oraz treści umieszczanych na platformie</li>
                </ul>
            </div>
            <MainFooter />
        </div>
    )
}

export default termsOfUse
