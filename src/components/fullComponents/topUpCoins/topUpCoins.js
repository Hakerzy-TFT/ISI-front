import React, { useCallback, useState } from 'react';
import './topUpCoins.css';
import Navbar from '../../../components/commons/navbar/Navbar';
import MainFooter from '../../../components/commons/mainFooter/mainFooter';
import jwt_decode from "jwt-decode";
import { useCookies } from 'react-cookie';
import GooglePayButton from "@google-pay/button-react";
import axios from "axios";
class UserCooins{
    constructor(username,incrementBalanceBy)
    {
        this.username=username;
        this.incrementBalanceBy=incrementBalanceBy;
    }
}

function TopUpCoins() {
    var username;
    const paymentRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
            {
                type: "CARD",
                parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"]
                },
                tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                        'gateway': 'example',
                        'gatewayMerchantId': 'exampleGatewayMerchantId'
                    }
                }
            }
        ],
        merchantInfo: {
            merchantName: 'GameSpace'
        },
        transactionInfo: {
            countryCode: 'PL',
            currencyCode: "PLN",
            totalPriceStatus: "FINAL",
            totalPrice: "0.00",
            totalPriceLabel: "Total"
        }
    };




    const [cookies, setCookie] = useCookies(['access_token', 'loged','currentUserName', 'user_or_studio']);
    const makeClicked = useCallback(
        (e) => {
            var token = cookies.access_token;
            var decoded = jwt_decode(token);
            username = decoded.given_name;
            if (document.getElementById("1000coins") && document.getElementById("2000coins") && document.getElementById("5000coins") && document.getElementById("10000coins") && document.getElementById("premiumcoins")) {
                document.getElementById("1000coins").style.backgroundColor = "#ffac04";
                document.getElementById("2000coins").style.backgroundColor = "#ffac04";
                document.getElementById("5000coins").style.backgroundColor = "#ffac04";
                document.getElementById("10000coins").style.backgroundColor = "#ffac04";
                document.getElementById("premiumcoins").style.backgroundColor = "#ffac04";
                document.getElementById(e.target.id).style.backgroundColor = "green";
                if (e.target.id === "1000coins") {
                    document.getElementById("topUpCoinsSummaryLabel").innerHTML = "1000 monet ";
                    document.getElementById("CoinsMoney").innerHTML = "10.00";
                }
                else if (e.target.id === "2000coins") {
                    document.getElementById("topUpCoinsSummaryLabel").innerHTML = "2000 monet ";
                    document.getElementById("CoinsMoney").innerHTML = "20.00";
                }
                else if (e.target.id === "5000coins") {
                    document.getElementById("topUpCoinsSummaryLabel").innerHTML = "5000 monet ";
                    document.getElementById("CoinsMoney").innerHTML = "50.00";
                }
                else if (e.target.id === "10000coins") {
                    document.getElementById("topUpCoinsSummaryLabel").innerHTML = "10000 monet ";
                    document.getElementById("CoinsMoney").innerHTML = "100.00";
                }
                else if (e.target.id === "premiumcoins") {
                    document.getElementById("topUpCoinsSummaryLabel").innerHTML = "100000 monet ";
                    document.getElementById("CoinsMoney").innerHTML = "1000.00";


                } paymentRequest.transactionInfo.totalPrice = document.getElementById("CoinsMoney").innerHTML;
                document.getElementById("container").style.overflow = "visible";
            }
        }
    )

    return (
        <div className="topUpCoins">
            <Navbar />
            <div className="topUpCoinsBody">
                <div className="topUpCoinsContent">
                    ZASIL PORTFEL <label id="usernameCoins" ></label>
                </div>
                <div className="topUpCoinsPayment">
                    <button id="1000coins" type="button" className="btn btn-warning btn-circle btn-xl" onClick={makeClicked}>1000 monet <br />10 zł</button>
                    <button id="2000coins" type="button" className="btn btn-warning btn-circle btn-xl" onClick={makeClicked}>2000 monet <br />20 zł</button>
                    <button id="5000coins" type="button" className="btn btn-warning btn-circle btn-xl" onClick={makeClicked}>5000 monet <br />50 zł</button>
                    <button id="10000coins" type="button" className="btn btn-warning btn-circle btn-xl" onClick={makeClicked}>10000 monet <br />100 zł</button>
                    <button id="premiumcoins" type="button" className="btn btn-warning btn-circle btn-xl" onClick={makeClicked}>100000 monet <br />1000 zł</button>
                </div>
                <div className="topUpCoinsSummary">
                    <label id="topUpCoinsSummaryLabel" /><label id="CoinsMoney" />
                    <div id="container"></div>
                    <GooglePayButton
                        environment="TEST"
                        paymentRequest={paymentRequest}
                        onLoadPaymentData={paymentRequest => {
                            console.log("load payment data", paymentRequest);
                            var dane=new UserCooins(username,document.getElementById("CoinsMoney").innerHTML*100);
                            console.log(dane);
                            axios.post('http://localhost:5001/api/Users/Coins', dane, {
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }).then(response => {
                                console.log(response);
                            })
                        }}

                    />
                </div>
            </div>
            <MainFooter />
        </div>
    )
}

export default TopUpCoins

