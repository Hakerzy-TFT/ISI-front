import React from 'react';
import './activities.css';

function activities(props) {
    return (
        <div className="activities">
            <div className="activitiesHeader">
                <div className="activitiesIco">
                    <i className="fas fa-wheelchair fa-3x"></i>
                </div>
                <div className="activitiesUserDescription">
                {props.ActivityTitle}
                <div className="smallLetters">
                <br />
                    Kategoria: {props.IssueTitle}
                </div>
                </div>
                <div className="activitiesGame">
                    w grze: {props.TargetGame}
                </div>
            </div>
            <div className="activitiesContent">
                <div className="activitiesContentHeader">
                {props.Review}
                </div>
                <div className="activitiesText">
                    Zachęcamy do kolejnych aktywności
                </div>
                <div className="activitiesReadMore">
                </div>
            </div>
        </div>
    )
}

export default activities
