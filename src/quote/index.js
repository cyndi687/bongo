import React, { Component } from 'react'
import Footer from '../reuseables/footer';
import CalculateCost from '../home/calculateCost';
import MainNav from '../reuseables/mainNav'
import TopBar from '../reuseables/topBar';
import Login from '../auth';
import BreadCrumbs from '../reuseables/breadcrumbs';
import SmallBanner from '../home/smallBanner';


class index extends Component {
    render() {
        return (
            <div>
                {/* Main Wrapper */}
                <main className="wrapper">
                    {/* Header */}
                    <header className="header-main">
                        {/* Header Topbar */}
                        <TopBar />
                        {/* /.Header Topbar */}
                        {/* Header Logo & Navigation */}
                        <MainNav />
                        {/* /.Header Logo & Navigation */}
                    </header>
                    {/* /.Header */}
                    {/* Content Wrapper */}
                    <article>
                        {/* Breadcrumb */}
                            <BreadCrumbs/>
                        {/* /.Breadcrumb */}
                        {/* Quote */}
                        <CalculateCost/>
                        {/* /.Quote */}
                        {/* Steps */}
                        <SmallBanner/>
                        {/* /.Steps */}
                    </article>
                    {/* /.Content Wrapper */}
                    {/* Footer */}
                    <Footer />
                    {/* /.Footer */}
                </main>
                {/* / Main Wrapper */}
                {/* Top */}
                <div className="to-top theme-clr-bg transition"> <i className="fa fa-angle-up" /> </div>
                {/* Popup: Login */}
                <Login />
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