import React from 'react';
import './studio.css';
import Navbar from '../../../components/commons/navbar/Navbar';
import MainFooter from '../../../components/commons/mainFooter/mainFooter';
import StudioNavbar from './studioNavbar/studioNavbar';

function studio() {
    const studio = "CD PROJEKT RED";
    const image = "./white.png";
    const buttonColor="red";
    return (
        <div className="studio">
            <Navbar />
            <div className="studioBody">
                <StudioNavbar name={studio}/>
                <div className="studioContent" style={{ backgroundImage: "url(/img.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className="studioContentLeft" style={{ color: "white" }}>
                        <span style={{ textDecoration: "underline overline", fontSize: "28px" }}>O NAS</span><br />
                        <img src="/face.png" className="mainStudioImg" alt="IMG NOT LOADED"/><br />
                        <span className="studioDescription">
                            <hr />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                        </span>
                        <hr />
                    </div>
                    <div className="studioContentRight">
                        <b>WITAMY</b><hr />
                        <div className="studioRight">{studio}</div><br />
                        <div className="smallStudioImageContener">
                            <div className="smallStudioLeftImage">
                                <img src={image} className="smallStudioImage" alt="IMG NOT LOADED"/>
                                <button type="button" class="btn btn-primary" style={{transform: "translateX(75%)",backgroundColor:buttonColor}}>Primary</button>
                            </div>
                            <div className="smallStudioRightImage">
                                <img src={image} className="smallStudioImage" alt="IMG NOT LOADED"/>
                                <button type="button" class="btn btn-primary" style={{transform: "translateX(75%)",backgroundColor:buttonColor}}>Primary</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MainFooter />
        </div>
    )
}

export default studio
