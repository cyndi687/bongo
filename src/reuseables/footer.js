import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="footer-main pad-120 white-clr">
                <div className="theme-container container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 footer-widget">
                            <a href="/"> <img className="logo" alt="#" height='50px' src="assets/img/logo/logo-white.png" /></a>
                        </div>
                        <div className="col-md-3 col-sm-6 footer-widget">
                            <h2 className="title-1 fw-900">quick links</h2>
                            <ul>
                                <li> <a href="/about">about</a> </li>
                                <li> <a href="/tracking">tracking</a> </li>
                                <li> <a href="/quote">get a quote</a> </li>
                                <li> <a href="/createshipping">book shipment</a> </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 footer-widget">
                            <h2 className="title-1 fw-900">important links</h2>
                            <ul>
                                <li> <a href="#">terms and conditions</a> </li>
                                <li> <a href="#">privacy policy</a> </li>
                                
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 footer-widget">
                            <h2 className="title-1 fw-900">get in touch</h2>
                            <ul className="social-icons list-inline">
                                <li className="wow fadeIn" data-wow-offset={50} data-wow-delay=".20s"> <a href="#" className="fa fa-facebook" /> </li>
                                <li className="wow fadeIn" data-wow-offset={50} data-wow-delay=".25s"> <a href="#" className="fa fa-twitter" /> </li>
                                <li className="wow fadeIn" data-wow-offset={50} data-wow-delay=".30s"> <a href="#" className="fa fa-google-plus" /> </li>
                                <li className="wow fadeIn" data-wow-offset={50} data-wow-delay=".35s"> <a href="#" className="fa fa-linkedin" /> </li>
                            </ul>
                            {/* <ul className="payment-icons list-inline">
                                <li className="wow fadeIn" data-wow-offset={50} data-wow-delay=".20s"> <a href="#"> <img alt="#" src="assets/img/icons/payment-1.png" /> </a> </li>
                                <li className="wow fadeIn" data-wow-offset={50} data-wow-delay=".25s"> <a href="#"> <img alt="#" src="assets/img/icons/payment-2.png" /> </a> </li>
                                <li className="wow fadeIn" data-wow-offset={50} data-wow-delay=".30s"> <a href="#"> <img alt="#" src="assets/img/icons/payment-3.png" /> </a> </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="theme-container container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <p> © Copyright 2020, All rights reserved </p>
                        </div>
                        <div className="col-md-6 col-sm-6 text-right">
                            <p> Bongo Express Courier & Delivery Services </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer