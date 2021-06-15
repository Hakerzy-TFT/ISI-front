import React,{useEffect,useState} from 'react';
import './studio.css';
import Navbar from '../../../components/commons/navbar/Navbar';
import MainFooter from '../../../components/commons/mainFooter/mainFooter';
import StudioNavbar from './studioNavbar/studioNavbar';
import {
    Link, useLocation
} from 'react-router-dom';
import axios from 'axios';
class Names{
    constructor(name){
        this.name=name;
    }
}
class StudioVariable{
    constructor(studio_description,background_color,background_image,button1_url,button2_url,button_color,font_color,header,img1_src,img2_src,img3_src){
        this.studio_description=studio_description;
        this.background_color=background_color;
        this.background_image=background_image;
        this.button1_url=button1_url;
        this.button2_url=button2_url;
        this.button_color=button_color;
        this.font_color=font_color;
        this.header=header;
        this.img1_src=img1_src;
        this.img2_src=img2_src;
        this.img3_src=img3_src;
    }
}
function Studio() {
    const location = useLocation();
    const studio = location.state?.studio;
    const image = "./white.png";
    const buttonColor="red";
    const [studioOb, setstudioOb] = useState();
    useEffect(() => {
        var cont=new Names(studio);
        axios.post(`http://localhost:5001/api/StudioPages/studio-and-page`,cont, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response.data);
            
            var cat=new StudioVariable(response.data[0].studio_description,response.data[0].background_color,response.data[0].background_image,response.data[0].button1_url,response.data[0].button2_url,response.data[0].button_color,response.data[0].font_color,response.data[0].header,response.data[0].img1_src,response.data[0].img2_src,response.data[0].img3_src);
            setstudioOb(cat);
            console.log(cat);
        }
        );
    }, []);


    return (
        <div className="studio">
            <Navbar />
            <div className="studioBody">
                <StudioNavbar name={studio}/>
                {studioOb&&<div className="studioContent" style={{ backgroundImage: `url(${studioOb.background_image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className="studioContentLeft" style={{ color:studioOb.font_color }}>
                        <span style={{ textDecoration: "underline overline", fontSize: "28px" }}>O NAS</span><br />
                        <img src={studioOb.img1_src} className="mainStudioImg" alt="IMG NOT LOADED"/><br />
                        <span className="studioDescription">
                            <hr />
                            {studioOb.studio_description}</span>
                        <hr />
                    </div>
                    <div className="studioContentRight">
                        <b>WITAMY</b><hr />
                        <div className="studioRight">{studio}</div><br />
                        <div className="smallStudioImageContener">
                            <div className="smallStudioLeftImage">
                                <img src={studioOb.img2_src} className="smallStudioImage" alt="IMG NOT LOADED"/>
                                <Link to={{
                        pathname: "/game",
                        state: { gameId: studioOb.button1_url },
                    }}><button type="button" class="btn btn-primary" style={{transform: "translateX(75%)",backgroundColor:buttonColor}}>Przejdź do</button></Link>
                            </div>
                            <div className="smallStudioRightImage">
                                <img src={studioOb.img3_src} className="smallStudioImage" alt="IMG NOT LOADED"/>
                                <Link to={{
                        pathname: "/game",
                        state: { gameId: studioOb.button2_url  },
                    }}><button type="button" class="btn btn-primary" style={{transform: "translateX(75%)",backgroundColor:buttonColor}}>Przejdź do</button></Link>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
            <MainFooter />
        </div>
    )
}

export default Studio
