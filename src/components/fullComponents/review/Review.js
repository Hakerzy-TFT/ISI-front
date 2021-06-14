import React, { useEffect, useState } from 'react';
import './Review.css';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import jwt_decode from "jwt-decode";
class reviewelement {
    constructor(gameId, rating, reviewContent, endUserId) {
        this.gameId = gameId;
        this.rating = rating;
        this.reviewContent = reviewContent;
        this.endUserId = endUserId;
    }
}

function Review(props) {
    const [cookies, setCookie] = useCookies(['access_token', 'loged']);
    const reviewobject = [];

    const [reviewob, setReviewob] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:5001/api/Reviews/bygameid/` + props.gameId, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            var keys = Object.keys(response.data);
            keys.forEach(key => {
                reviewobject.push(new reviewelement(key, response.data[key].rating, response.data[key].review_content, response.data[key].username));
            });
            setReviewob(reviewobject);
        }
        );
    }, []);

    function postReview() {

        var dataContainer = document.getElementById('data-container');
        if (document.getElementById("reviewText").value === "") {
            dataContainer.setAttribute('data-value', "Wpisz treść komentarza");
            dataContainer.innerHTML = "Wpisz treść komentarza";
            dataContainer.style.overflow = "visible";
            setTimeout(() => {
                dataContainer.setAttribute('data-value', "");
                dataContainer.innerHTML = "";
                dataContainer.style.overflow = "hidden";
            }, 10000);
        }
        else {
            if (cookies.loged) {
                var token = cookies.access_token;
                var decoded = jwt_decode(token);
                console.log(decoded);
                var cont= new reviewelement(props.gameId, document.getElementById("quantity").value, document.getElementById("reviewText").value, decoded.userId);
                console.log(cont);
                axios.post('http://localhost:5001/api/Reviews', cont, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response => {
                    console.log(response)
                    if (response.status == "200") {
                        dataContainer.setAttribute('data-value', "Komentarz został dodany");
                        dataContainer.innerHTML = "Komentarz został dodany";
                        dataContainer.style.overflow = "visible";
                    }

                })
            }
            else {
                dataContainer.setAttribute('data-value', "Zaloguj się aby dodać komentarz");
                dataContainer.innerHTML = "Zaloguj się aby dodać komentarz";
                dataContainer.style.overflow = "visible";
                setTimeout(() => {
                    dataContainer.setAttribute('data-value', "");
                    dataContainer.innerHTML = "";
                    dataContainer.style.overflow = "hidden";
                }, 10000);
            }
        }
    }

    return (
        <div className="Review">
            <div className="ReviewNew">
                <textarea id="reviewText" name="text" className="ReviewInput" wrap="soft" /><br />
                Ocena:<input type="number" id="quantity" name="quantity" min="0" max="10" step="0.5" defaultValue="5" /><br />
                <button type="button" className="btn btn-info" onClick={postReview}>Dodaj komentarz</button>
                <div id="data-container" data-value=""></div>
            </div>
            <span style={{ width: "100%" }}>Komentarze:<br /><br /></span>

            {reviewob ? reviewob.map(obje => <div className="ReviewOld"><div className="ReviewUser">
                {obje.endUserId}
            </div>
                <div className="ReviewComment">
                    {obje.reviewContent}
                </div>
                <div className="ReviewRating">
                    {obje.rating}/10
                </div>
                <hr /></div>) : <div className="ReviewOld"><h1>Brak komentarzy w bazie</h1></div>}


        </div>
    )
}

export default Review
