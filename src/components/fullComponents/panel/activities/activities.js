import React from 'react';
import './activities.css';

function activities() {
    return (
        <div className="activities">
            <div className="activitiesHeader">
                <div className="activitiesIco">
                    <i class="fas fa-wheelchair fa-3x"></i>
                </div>
                <div className="activitiesUserDescription">
                    Zgłoszono błąd
                <div className="smallLetters">
                        wtorek 19:00<br />
                    Kategoria: gameplay
                </div>
                </div>
                <div className="activitiesGame">
                    w grze: DAYS GONE
                </div>
            </div>
            <div className="activitiesContent">
                <div className="activitiesContentHeader">
                    Lorem ipsum dolor sit amet, consectetur
                </div>
                <div className="activitiesText">
                    Lorem ipsum dolor sit amet, consecterured et just Lorem ipsum dolor sit amet, consecterured et just Lorem ipsum dolor sit amet, consecterured et just Lorem ipsum dolor sit amet, consecterured et just
                </div>
                <div className="activitiesReadMore">
                    <a href="" className="readMore">Czytaj dalej...</a>
                </div>
            </div>
        </div>
    )
}

export default activities
