import React,{ useCallback } from 'react';
import './topUpCoins.css';
import Navbar from '../../../components/commons/navbar/Navbar';
import MainFooter from '../../../components/commons/mainFooter/mainFooter';


function TopUpCoins() {
    const makeClicked = useCallback(
        (e)=>{
            if (document.getElementById("1000coins")&&document.getElementById("2000coins")&&document.getElementById("5000coins")&&document.getElementById("10000coins")&&document.getElementById("premiumcoins")) {
                document.getElementById("1000coins").style.backgroundColor = "#ffac04";
                document.getElementById("2000coins").style.backgroundColor = "#ffac04";
                document.getElementById("5000coins").style.backgroundColor = "#ffac04";
                document.getElementById("10000coins").style.backgroundColor = "#ffac04";
                document.getElementById("premiumcoins").style.backgroundColor = "#ffac04";
                document.getElementById(e.target.id).style.backgroundColor = "green";
                if(e.target.id==="1000coins"){
                    document.getElementById("topUpCoinsSummaryLabel").innerHTML="1000 monet ";
                    document.getElementById("CoinsMoney").innerHTML="10.00";
                }
                else if(e.target.id==="2000coins"){
                    document.getElementById("topUpCoinsSummaryLabel").innerHTML="2000 monet ";
                    document.getElementById("CoinsMoney").innerHTML="20.00";
                }
                else if(e.target.id==="5000coins"){
                    document.getElementById("topUpCoinsSummaryLabel").innerHTML="5000 monet ";
                    document.getElementById("CoinsMoney").innerHTML="50.00";
                }
                else if(e.target.id==="10000coins"){
                    document.getElementById("topUpCoinsSummaryLabel").innerHTML="10000 monet ";
                    document.getElementById("CoinsMoney").innerHTML="100.00";
                }
                else if(e.target.id==="premiumcoins"){
                    document.getElementById("topUpCoinsSummaryLabel").innerHTML="Lifetime Alpha Premium ";
                    document.getElementById("CoinsMoney").innerHTML="1000.00";
                }
                document.getElementById("container").style.overflow="visible";
            }
        }
    )

    return (
        <div className="topUpCoins">
            <Navbar />
            <div className="topUpCoinsBody">
                <div className="topUpCoinsContent">
                    ZASIL PORTFEL
                </div>
                <div className="topUpCoinsPayment">
                    <button id="1000coins" type="button" className="btn btn-warning btn-circle btn-xl" onClick={makeClicked}>1000 monet <br />10 zł</button>
                    <button id="2000coins" type="button" className="btn btn-warning btn-circle btn-xl" onClick={makeClicked}>2000 monet <br />20 zł</button>
                    <button id="5000coins" type="button" className="btn btn-warning btn-circle btn-xl" onClick={makeClicked}>5000 monet <br />50 zł</button>
                    <button id="10000coins" type="button" className="btn btn-warning btn-circle btn-xl" onClick={makeClicked}>10000 monet <br />100 zł</button>
                    <button id="premiumcoins" type="button" className="btn btn-warning btn-circle btn-xl" onClick={makeClicked}>Lifetime Alpha Premium <br />1000 zł</button>
                </div>
                <div className="topUpCoinsSummary">
                    <label id="topUpCoinsSummaryLabel"/><label id="CoinsMoney"/>
                    <div id="container"></div>
                </div>
            </div>
            <MainFooter />
        </div>
    )
}

export default TopUpCoins
