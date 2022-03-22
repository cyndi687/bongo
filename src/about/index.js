import React, { Component } from 'react'
import Footer from '../reuseables/footer'
import MainNav from '../reuseables/mainNav'
import TopBar from '../reuseables/topBar'
import Login from '../auth'
import History from './history'
import Mission from './mission'
import WhatWeDo from './whatwedo'


class index extends Component {
    render() {
        return (

            <div>
                {/* Main Wrapper */}
                <main className="wrapper">
                    {/* Header */}
                    <header className="header-main">
                        {/* Header Topbar */}
                        <TopBar/>
                        {/* /.Header Topbar */}
                        {/* Header Logo & Navigation */}
                        <MainNav/>
                        {/* /.Header Logo & Navigation */}
                    </header>
                    {/* /.Header */}
                    {/* Content Wrapper */}
                    <article className="about-page">
                        {/* Breadcrumb */}
                        <section className="theme-breadcrumb pad-50">
                            <div className="theme-container container ">
                                <div className="row">
                                    <div className="col-sm-8 pull-left">
                                        <div className="title-wrap">
                                            <h2 className="section-title no-margin">About us</h2>
                                            <p className="fs-16 no-margin">Know about us more</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <ol className="breadcrumb-menubar list-inline">
                                            <li><a href="#" className="gray-clr">Home</a></li>
                                            <li className="active">About</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* /.Breadcrumb */}
                        {/* About Us */}
                        <section className="pad-50 about-wrap">
                            <span className="bg-text"> About </span>
                            <div className="theme-container container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="about-us pt-10">
                                            <p className="fs-16 wow fadeInUp" data-wow-offset={50} data-wow-delay=".25s">
                                            Bongo Express Courier Service is the world's largest package delivery company. 
                                            Leave the logistics to us.
                            
                </p>
                                            <ul className="feature">
                                                <li>
                                                    <img alt="" src="assets/img/icons/icon-2.png" className="wow fadeInUp" data-wow-offset={50} data-wow-delay=".20s" />
                                                    <div className="feature-content wow rotateInDownRight" data-wow-offset={50} data-wow-delay=".30s">
                                                        <h2 className="title-1">Customer First</h2>
                                                        <p>We always put our customers first</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img alt="" src="assets/img/icons/icon-3.png" className="wow fadeInUp" data-wow-offset={50} data-wow-delay=".20s" />
                                                    <div className="feature-content wow rotateInDownRight" data-wow-offset={50} data-wow-delay=".30s">
                                                        <h2 className="title-1">People-Led</h2>
                                                        <p>We believe in the power of two</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img alt="" src="assets/img/icons/icon-4.png" className="wow fadeInUp" data-wow-offset={50} data-wow-delay=".20s" />
                                                    <div className="feature-content wow rotateInDownRight" data-wow-offset={50} data-wow-delay=".30s">
                                                        <h2 className="title-1">Innovation-Driven</h2>
                                                        <p>We ship for the future</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-center">
                                        <img alt="" src="assets/img/block/about-img.png" className="effect animated fadeInRight" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* /.About Us */}
                        {/* More About Us */}
                        <section className="pad-30 more-about-wrap">
                            <div className="theme-container container pb-100">
                                <div className="row">
                                    <WhatWeDo/>
                                    <History/>
                                    <Mission/>
                                </div>
                            </div>
                        </section>
                        {/* /.More About Us */}
                    </article>
                    {/* /.Content Wrapper */}
                    {/* Footer */}
                   <Footer/>
                    {/* /.Footer */}
                </main>
                {/* / Main Wrapper */}
                {/* Top */}
                <div className="to-top theme-clr-bg transition"> <i className="fa fa-angle-up" /> </div>
                {/* Popup: Login */}
                <Login/>
                {/* /Popup: Login */}
                {/* Search Popup */}
                <div className="search-popup">
                    <div>
                        <div className="popup-box-inner">
                            <form>
                                <input className="search-query" type="text" placeholder="Search and hit enter" />
                            </form>
                        </div>
                    </div>
                    <a href="javascript:void(0)" className="close-search"><i className="fa fa-close" /></a>
                </div>
            </div>

        )
    }
}

export default index