import React from 'react';
import './support.css';
import Navbar from '../../../components/commons/navbar/Navbar';
import MainFooter from '../../../components/commons/mainFooter/mainFooter';

function support() {

    return (
        <div className="support">
            <Navbar />
            <div className="supportContent">
                   <section className="mb-4">
                    <h2 className="h1-responsive font-weight-bold text-center my-4">Wsparcie</h2>
                    <p className="text-center w-responsive mx-auto mb-5">W przypadku jakichkolwiek pytań i problemów, napisz</p>
                    <div className="row">
                        <div className="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input type="text" id="name" name="name" className="form-control" />
                                            <label for="name" className="">Imię i nazwisko</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input type="text" id="email" name="email" className="form-control" />
                                            <label for="email" className="">Twój email</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <input type="text" id="subject" name="subject" className="form-control" />
                                            <label for="subject" className="">Temat</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form">
                                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                            <label for="message">Wiadomość</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="text-center text-md-left">
                                <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Wyślij</a>
                            </div>
                            <div className="status"></div>
                        </div>
                        <div className="col-md-3 text-center">
                            <ul className="list-unstyled mb-0">
                                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                    <p>Kielce</p>
                                </li>
                                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                    <p></p>
                                </li>
                                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                    <p>contact@gamespace.pl</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                
            </div>
            <MainFooter />
        </div>
    )
}

export default support
