import React from 'react';
import './studioPanel.css';
import Navbar from '../../../commons/navbar/Navbar';
import MainFooter from '../../../commons/mainFooter/mainFooter';
import {
    Link
} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useForm } from "react-hook-form";

class dane {
    constructor(title, description, releaseDate, postedDate, gameStudioName, platform, genre, imgSrc, statusId, backgroundColor, button1Url, button2Url, gamePageDescription, fontColor, header, img1Src, img2Src, img3Src, backgroundImage, status) {
        this.title = title;
        this.description = description;
        this.releaseDate = releaseDate;
        this.postedDate = postedDate;
        this.gameStudioName = gameStudioName;
        this.platform = platform;
        this.genre = genre;
        this.imgSrc = imgSrc;
        this.statusId = statusId;
        this.backgroundColor = backgroundColor;
        this.button1Url = button1Url;
        this.button2Url = button2Url;
        this.gamePageDescription = gamePageDescription;
        this.fontColor = fontColor;
        this.header = header;
        this.img1Src = img1Src;
        this.img2Src = img2Src;
        this.img3Src = img3Src;
        this.backgroundImage = backgroundImage;
        this.status = status;
    }
}


function StudioPanel() {
    const [cookies, setCookie] = useCookies(['access_token', 'loged', 'currentUserName', 'user_or_studio']);
    var token = cookies.access_token;

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        var dataContainer = document.getElementById('data-container');
        let daanee = new dane(data.title, data.description, data.releaseDate, data.postedDate, data.gameStudioName, data.platform, data.genre, data.imgSrc, data.statusId, "black", "1", "2", data.gamePageDescription, data.fontColor, data.header, data.img1Src, data.img2Src, data.img3Src, data.backgroundImage, 1);
        console.log(data);
        axios.post('http://localhost:5001/api/Games', daanee, {
            headers: {
                'Content-Type': 'text/json'
            }
        }).then(response => {
            console.log(response)
            if (response.status == "200") {
                dataContainer.setAttribute('data-value', "Gra dodana");
                dataContainer.innerHTML = "Gra dodana";
                dataContainer.style.overflow = "visible";
            }

        }).catch(error => {
            dataContainer.setAttribute('data-value', "Błąd");
            dataContainer.innerHTML = "Błąd";
            dataContainer.style.overflow = "visible";
        });
        setTimeout(() => {
            dataContainer.setAttribute('data-value', "");
            dataContainer.innerHTML = "";
            dataContainer.style.overflow = "hidden";
        }, 5000);
    };

    return (
        <div className="userPanel">
            <Navbar />
            {cookies.loged === '1' && <div className="userPanelContent">
                <div className="userPanelLeftContent">
                    <i className="fas fa-wheelchair fa-3x"></i>
                    <div className="userPanelInfos">

                        <div className="userPanelLevel">
                            {cookies.currentUserName}<br />
                            Witamy w panelu studia</div>
                    </div>
                </div>
                <div className="userPanelRightContent">
                    Dodaj grę:
                    <div className="userPanelActivities">
                        <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>

                            <label className="StudioLabel" className="StudioLabel" htmlFor="title">Tytuł:</label>
                            <input {...register("title", {
                                required: 'Tytuł jest wymagany'
                            })} />
                            <br />
                            <label className="StudioLabel" className="StudioLabel" className="StudioLabel" htmlFor="description">Opis:</label>
                            <input {...register("description", { required: 'Login jest wymagany' })} /><br />
                            <label className="StudioLabel" className="StudioLabel" htmlFor="releaseDate">Data stworzenia:</label>
                            <input type="date" {...register("releaseDate", { required: 'Data stworzenia jest wymagana' })} /><br />
                            <label className="StudioLabel" className="StudioLabel" htmlFor="postedDate">Data zamieszczenia:</label>
                            <input type="date" {...register("postedDate", { required: 'Data zamieszczenia jest wymagana' })} />
                            <br />
                            <label className="StudioLabel" className="StudioLabel" htmlFor="gameStudioName">Nazwa studia:</label>
                            <input {...register("gameStudioName", { required: 'Nazwa studia jest wymagana' })} />
                            <br />
                            <label className="StudioLabel" className="StudioLabel" htmlFor="platform">Platforma:</label>
                            <input {...register("platform", { required: 'Platforma jest wymagana' })} />
                            <br />
                            <label className="StudioLabel" className="StudioLabel" htmlFor="imgSrc">URL tła</label>
                            <input type="text"  {...register("imgSrc", {
                                required: 'URL tła jest wymagane'
                            })} />
                            <br />
                            <label className="StudioLabel" className="StudioLabel" htmlFor="backgroundImage">URL tła zastępczego</label>
                            <input type="text"  {...register("backgroundImage", {
                                required: 'URL tła zastępczego jest wymagane'
                            })} />
                            <br />
                            <label className="StudioLabel" className="StudioLabel" htmlFor="gamePageDescription">Opis strony gry</label>
                            <input type="text"  {...register("gamePageDescription", {
                                required: 'Opis strony gry jest wymagane'
                            })} />
                            <br />
                            <label className="StudioLabel" className="StudioLabel" htmlFor="fontColor">Kolor czcionki</label>
                            <input type="text"  {...register("fontColor", {
                                required: 'Kolor czcionki jest wymagane'
                            })} />
                            <br />
                            <label className="StudioLabel" className="StudioLabel" htmlFor="header">Nagłowek</label>
                            <input type="text"  {...register("header", {
                                required: 'Nagłowek jest wymagane'
                            })} />
                            <br />
                            <label className="StudioLabel" className="StudioLabel" htmlFor="img1Src">URL zdjęcia 1</label>
                            <input type="text"  {...register("img1Src", {
                                required: 'URL zdjęcia 1 jest wymagane'
                            })} />
                            <br />
                            <label className="StudioLabel" className="StudioLabel" htmlFor="img2Src">URL zdjęcia 2</label>
                            <input type="text"  {...register("img2Src", {
                                required: 'URL zdjęcia 2 jest wymagane'
                            })} />
                            <br />
                            <label className="StudioLabel" className="StudioLabel" htmlFor="img3Src">URL zdjęcia 3</label>
                            <input type="text"  {...register("img3Src", {
                                required: 'URL zdjęcia 3 jest wymagane'
                            })} />
                            <br />
                            <label className="StudioLabel" className="StudioLabel" htmlFor="genre">Gatunek</label>
                            <select {...register("genre")}>
                                <option value="RPG">RPG</option>
                                <option value="Action games">Gry akcji</option>
                                <option value="Action-adventure games">
                                    Przygodowe gry akcji</option>
                                <option value="Adventure games">
                                    Gry przygodowe</option>
                                <option value="Simulation games">Symulacje</option>
                                <option value="Role-playing games">
                                    Gry fabularne</option>
                                <option value="Strategy games">Gry strategiczne</option>
                                <option value="Sports games">Gry sportowe</option>
                                <option value="Puzzle games">Puzzle</option>
                                <option value="Idle games">Idle games</option>
                                <option value="MOBA">MOBA</option>
                            </select>
                            <br />
                            <input className="btn btn-dark loginbutton" type="submit" value="Dodaj" />
                            {
                                (errors.email
                                    &&
                                    (<div className="error">{errors.email.message}</div>))
                                || (errors.name
                                    &&
                                    (<div className="error">{errors.name.message}</div>))
                                ||
                                (errors.surname
                                    &&
                                    (<div className="error">{errors.surname.message}</div>))
                                ||
                                (errors.dateOfBirth
                                    &&
                                    (<div className="error">{errors.dateOfBirth.message}</div>))
                                ||
                                (errors.password
                                    &&
                                    (<div className="error">{errors.password.message}</div>))
                            }

                        </form>
                        <div id="data-container" data-value=""></div>
                    </div>
                </div>
            </div>}
            <MainFooter />
        </div >
    )
}

export default StudioPanel
