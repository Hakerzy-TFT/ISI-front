import React from 'react';
import './aboutUs.css';
import Navbar from '../../../components/commons/navbar/Navbar';
import MainFooter from '../../../components/commons/mainFooter/mainFooter';

function aboutUs() {
    return (
        <div className="aboutUs">
            <Navbar />
            <div className="aboutUsContent">
                <div className="aboutUsText">
                Projekt wykonany z użyciem frameworku React oraz języka C# <br/>
                Pierwsze IMDB dla gier z możliwością testów. Weź udział w naszym losowaniu, aby otrzymać darmowe klucze do gier w wersji Beta lub Alpha.<br/>
                Wykaż się w tworzeniu opinii oraz wspomaganiu twórców swoimi uwagami aby zwiększyć szansę na otrzymanie kolejnych kluczy do testów<br/>
                Zacznij zarabiać na tym, co lubisz najbardziej, czyli grze oraz pisaniu opinii. 
                </div>
            </div>
            <MainFooter />
        </div>
    )
}

export default aboutUs
