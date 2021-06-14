import React, { useCallback } from 'react';
import './topUpCoins.css';
import Navbar from '../../../components/commons/navbar/Navbar';
import MainFooter from '../../../components/commons/mainFooter/mainFooter';
import jwt_decode from "jwt-decode";
import { useCookies } from 'react-cookie';

function TopUpCoins() {

    const allowedCardNetworks = ["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"];
    const allowedCardAuthMethods = ["PAN_ONLY", "CRYPTOGRAM_3DS"];
    if (window.PaymentRequest) {
        const request = createPaymentRequest();

        request.canMakePayment()
            .then(function (result) {
                if (result) {
                    // Display PaymentRequest dialog on interaction with the existing checkout button
                    document.getElementById('buyButton')
                        .addEventListener('click', onBuyClicked);
                }
            })
            .catch(function (err) {
                showErrorForDebugging(
                    'canMakePayment() error! ' + err.name + ' error: ' + err.message);
            });
    } else {
        showErrorForDebugging('PaymentRequest API not available.');
    }

    /**
     * Show a PaymentRequest dialog after a user clicks the checkout button
     */
    function onBuyClicked() {
        createPaymentRequest()
            .show()
            .then(function (response) {
                // Dismiss payment dialog.
                response.complete('success');
                handlePaymentResponse(response);
            })
            .catch(function (err) {
                showErrorForDebugging(
                    'show() error! ' + err.name + ' error: ' + err.message);
            });
    }

    /**
     * Define your unique Google Pay API configuration
     *
     * @returns {object} data attribute suitable for PaymentMethodData
     */
    function getGooglePaymentsConfiguration() {
        return {
            environment: 'TEST',
            apiVersion: 2,
            apiVersionMinor: 0,
            merchantInfo: {
                // A merchant ID is available after approval by Google.
                // 'merchantId':'12345678901234567890',
                merchantName: 'Example Merchant'
            },
            allowedPaymentMethods: [{
                type: 'CARD',
                parameters: {
                    allowedAuthMethods: allowedCardAuthMethods,
                    allowedCardNetworks: allowedCardNetworks
                },
                tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    // Check with your payment gateway on the parameters to pass.
                    // @see {@link https://developers.google.com/pay/api/web/reference/request-objects#gateway}
                    parameters: {
                        'gateway': 'example',
                        'gatewayMerchantId': 'exampleGatewayMerchantId'
                    }
                }
            }]
        };
    }

    /**
     * Create a PaymentRequest
     *
     * @returns {PaymentRequest}
     */
    function createPaymentRequest() {
        // Add support for the Google Pay API.
        const methodData = [{
            supportedMethods: 'https://google.com/pay',
            data: getGooglePaymentsConfiguration()
        }];
        // Add other supported payment methods.
        methodData.push({
            supportedMethods: 'basic-card',
            data: {
                supportedNetworks:
                    Array.from(allowedCardNetworks, (network) => network.toLowerCase())
            }
        });

        const details = {
            total: { label: 'Test Purchase', amount: { currency: 'USD', value: '1.00' } }
        };

        const options = {
            requestPayerEmail: true,
            requestPayerName: true
        };

        return new PaymentRequest(methodData, details, options);
    }

    /**
     * Process a PaymentResponse
     *
     * @param {PaymentResponse} response returned when a user approves the payment request
     */
    function handlePaymentResponse(response) {
        const formattedResponse = document.createElement('pre');
        formattedResponse.appendChild(
            document.createTextNode(JSON.stringify(response.toJSON(), null, 2)));
        document.getElementById('checkout')
            .insertAdjacentElement('afterend', formattedResponse);
    }

    /**
     * Display an error message for debugging
     *
     * @param {string} text message to display
     */
    function showErrorForDebugging(text) {
        const errorDisplay = document.createElement('code');
        errorDisplay.style.color = 'red';
        errorDisplay.appendChild(document.createTextNode(text));
        const p = document.createElement('p');
        p.appendChild(errorDisplay);
        //document.getElementById('checkout').insertAdjacentElement('afterend', p);
    }




    const [cookies, setCookie] = useCookies(['access_token', 'loged']);
    const makeClicked = useCallback(
        (e) => {
            var token = cookies.access_token;
            var decoded = jwt_decode(token);
            var username = decoded.given_name;
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
                    document.getElementById("usernameCoins").innerHTML = username;
                }
                else if (e.target.id === "2000coins") {
                    document.getElementById("topUpCoinsSummaryLabel").innerHTML = "2000 monet ";
                    document.getElementById("CoinsMoney").innerHTML = "20.00";
                    document.getElementById("usernameCoins").innerHTML = username;
                }
                else if (e.target.id === "5000coins") {
                    document.getElementById("topUpCoinsSummaryLabel").innerHTML = "5000 monet ";
                    document.getElementById("CoinsMoney").innerHTML = "50.00";
                    document.getElementById("usernameCoins").innerHTML = username;
                }
                else if (e.target.id === "10000coins") {
                    document.getElementById("topUpCoinsSummaryLabel").innerHTML = "10000 monet ";
                    document.getElementById("CoinsMoney").innerHTML = "100.00";
                    document.getElementById("usernameCoins").innerHTML = username;
                }
                else if (e.target.id === "premiumcoins") {
                    document.getElementById("topUpCoinsSummaryLabel").innerHTML = "100000 monet ";
                    document.getElementById("CoinsMoney").innerHTML = "1000.00";
                    document.getElementById("usernameCoins").innerHTML = username;
                }
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
                    <div id="container"></div><div id="checkout">
  <button id="buyButton">Checkout</button>
</div>
                </div>
            </div>
            <MainFooter />
        </div>
    )
}

export default TopUpCoins

