import React from 'react';
import './Review.css';

function Review(props) {
    const username = "username";
    const comment = "comment";
    const rating = 10;
    return (
        <div className="Review">
            <div className="ReviewNew">
                <input className="ReviewInput" type="text" id="name" name="name" required /><br/>
                Ocena:<input type="number" id="quantity" name="quantity" min="0" max="10" step="0.5" defaultValue="5"/><br/>
                    <button type="button" className="btn btn-info">Dodaj komentarz</button>
            </div>
                <span style={{ width: "100%" }}>Komentarze:<br /><br /></span>
                <div className="ReviewOld">

                    <div className="ReviewUser">
                        {username}
                    </div>
                    <div className="ReviewComment">
                        {comment}
                    </div>
                    <div className="ReviewRating">
                        {rating}/10
                    </div>
                    <hr />
                </div>
            </div>
            )
}

            export default Review
