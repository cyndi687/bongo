import React, { Component } from "react";
import PreLoader from "../reuseables/loader";
import Footer from "../reuseables/footer";
import CalculateCost from "./calculateCost";
import MainNav from "../reuseables/mainNav";
import TopBar from "../reuseables/topBar";
// import  Clients from "../reuseables/clients";
import Auth from "../auth";
import SmallBanner from "./smallBanner";
import { connect } from "react-redux";
import { getFormDetails, trackProducts } from "../redux/actions";
import { Link } from "react-router-dom";

class index extends Component {
  componentDidMount() {
    setTimeout(this.props.getFormDetails({ props: ["load"], value: 1 }), 1000);
  }
  render() {
    const { load, trackingNo } = this.props;
    return (
      <div>
        {/* Popup: Login */}
        <Auth />
        {/* /Popup: Login */}
        {load == 0 ? <PreLoader /> : ""}

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
            {/* Banner */}

            <section className="banner mask-overlay pad-120 white-clr">
              <div className="container theme-container rel-div">
                <img
                  className="pt-10 effect animated fadeInLeft"
                  height="35px"
                  alt=""
                  src="assets/img/icons/icon-1.png"
                />
                <ul
                  className="list-items fw-600 effect animated wow fadeInUp"
                  data-wow-offset={50}
                  data-wow-delay=".20s"
                >
                  <li>
                    <a href="#">Customer First</a>
                  </li>
                  <li>
                    <a href="#">People-Led</a>
                  </li>
                  <li>
                    <a href="#">Innovation-Driven</a>
                  </li>
                </ul>
                <h2
                  className="section-title fs-48 effect animated wow fadeInUp"
                  data-wow-offset={50}
                  data-wow-delay=".20s"
                >
                  {" "}
                  Bongo Express <br />{" "}
                  <span className="theme-clr"> courier </span> &amp;{" "}
                  <span className="theme-clr"> delivery </span> services{" "}
                </h2>
              </div>
              <div className="pad-50 visible-lg" />
            </section>
            {/* /.Banner */}
            {/* Track Product */}
            <section>
              <div className="theme-container container">
                <div className="row">
                  <div
                    className="col-md-8 col-md-offset-2 track-prod clrbg-before wow slideInUp"
                    data-wow-offset={50}
                    data-wow-delay=".20s"
                  >
                    <h2 className="title-1"> track your product</h2>{" "}
                    <span className="font2-light fs-12">
                      Now you can track your product easily
                    </span>
                    <div className="row">
                      <form className>
                        <div className="col-md-7 col-sm-7">
                          <div className="form-group">
                            <input
                              type="text"
                              onChange={(e) =>
                                this.props.getFormDetails({
                                  props: ["trackingNo"],
                                  value: e.target.value,
                                })
                              }
                              placeholder="Enter your product ID"
                              required
                              className="form-control box-shadow"
                            />
                          </div>
                        </div>
                        <div className="col-md-5 col-sm-5">
                          <Link to="/tracking">
                            <div className="form-group">
                              <button
                                onClick={() =>
                                  this.props.trackProducts(trackingNo)
                                }
                                className="btn-1"
                              >
                                track your product
                              </button>
                            </div>
                          </Link>
                        </div>
                      </form>
                      {/* <div id="google_translate_element"></div> */}
                    </div>
                    
                  </div>
                </div>
              </div>
            </section>
            {/* /.Track Product */}
            {/* About Us */}
            <section className="pad-80 about-wrap clrbg-before">
              <span
                className="bg-text wow fadeInUp"
                data-wow-offset={50}
                data-wow-delay=".20s"
              >
                {" "}
                About{" "}
              </span>
              <div className="theme-container container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="about-us">
                      <h2
                        className="section-title pb-10 wow fadeInUp"
                        data-wow-offset={50}
                        data-wow-delay=".20s"
                      >
                        {" "}
                        About Us{" "}
                      </h2>
                      <p
                        className="fs-16 wow fadeInUp"
                        data-wow-offset={50}
                        data-wow-delay=".25s"
                      >
                        Bongo Express Courier Service is the world's largest
                        package delivery company. Leave the logistics to us.
                      </p>
                      <ul className="feature">
                        <li>
                          <img
                            alt=""
                            src="assets/img/icons/icon-2.png"
                            className="wow fadeInUp"
                            data-wow-offset={50}
                            data-wow-delay=".20s"
                          />
                          <div
                            className="feature-content wow rotateInDownRight"
                            data-wow-offset={50}
                            data-wow-delay=".30s"
                          >
                            <h2 className="title-1">Customer First</h2>
                            <p>We always put our customers first</p>
                          </div>
                        </li>
                        <li>
                          <img
                            alt=""
                            src="assets/img/icons/icon-3.png"
                            className="wow fadeInUp"
                            data-wow-offset={50}
                            data-wow-delay=".20s"
                          />
                          <div
                            className="feature-content wow rotateInDownRight"
                            data-wow-offset={50}
                            data-wow-delay=".30s"
                          >
                            <h2 className="title-1">People-Led</h2>
                            <p>We believe in the power of two</p>
                          </div>
                        </li>
                        <li>
                          <img
                            alt=""
                            src="assets/img/icons/icon-4.png"
                            className="wow fadeInUp"
                            data-wow-offset={50}
                            data-wow-delay=".20s"
                          />
                          <div
                            className="feature-content wow rotateInDownRight"
                            data-wow-offset={50}
                            data-wow-delay=".30s"
                          >
                            <h2 className="title-1">Innovation-Driven</h2>
                            <p>We ship for the future</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 text-center">
                    <div className="pb-80 visible-lg" />
                    <img
                      alt=""
                      src="assets/img/block/about-img.png"
                      className="wow slideInRight"
                      data-wow-offset={50}
                      data-wow-delay=".20s"
                    />
                  </div>
                </div>
              </div>
            </section>
            {/* /.About Us */}
            {/* Calculate Your Cost */}
            <CalculateCost />
            {/* /.Calculate Your Cost */}
            {/* Steps */}
            <SmallBanner />
            {/* /.Steps */}
            {/* Product Delivery */}
            <section className="prod-delivery pad-120">
              <div className="theme-container container">
                <div className="row">
                  <div className="col-md-11 col-md-offset-1">
                    <div className="pt-120 rel-div">
                      <div className="pb-50 hidden-xs" />
                      <h2
                        className="section-title wow fadeInUp"
                        data-wow-offset={50}
                        data-wow-delay=".20s"
                      >
                        {" "}
                        Get the <span className="theme-clr"> fastest </span>
                        delivery{" "}
                      </h2>
                      <p
                        className="fs-16 wow fadeInUp"
                        data-wow-offset={50}
                        data-wow-delay=".25s"
                      >
                        With Bongo express, complaints about late shipping<br/>
                        becomes a thing of the past.
                      </p>
                      <div className="pb-120 hidden-xs" />
                    </div>
                    <div className="delivery-img pt-10">
                      <img
                        alt=""
                        src="assets/img/block/delivery.png"
                        className="wow slideInLeft"
                        data-wow-offset={50}
                        data-wow-delay=".20s"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /.Product Delivery */}

            {/* Contact us */}
            <section className="contact-wrap pad-120">
              <span
                className="bg-text wow fadeInLeft"
                data-wow-offset={50}
                data-wow-delay=".20s"
              >
                {" "}
                Contact{" "}
              </span>
              <div className="theme-container container">
                <div className="row">
                  <div className="col-md-6 col-sm-8">
                    <div className="title-wrap">
                      <h2
                        className="section-title wow fadeInLeft"
                        data-wow-offset={50}
                        data-wow-delay=".20s"
                      >
                        contact us
                      </h2>
                      <p
                        className="wow fadeInLeft"
                        data-wow-offset={50}
                        data-wow-delay=".20s"
                      >
                        Get in touch with us easily
                      </p>
                    </div>
                    <ul className="contact-detail title-2">
                      {/* <li
                        className="wow slideInUp"
                        data-wow-offset={50}
                        data-wow-delay=".20s"
                      >
                        {" "}
                        <span>head office:</span>{" "}
                        <p className="gray-clr">
                          {" "}
                          Caloocan City Hall Complex, Metro Manila, Philippines
                        </p>{" "}
                      </li> */}
                      <li
                        className="wow slideInUp"
                        data-wow-offset={50}
                        data-wow-delay=".25s"
                      >
                        {" "}
                        <span>phone number:</span>{" "}
                        <p className="gray-clr"> +15177597573</p>{" "}
                      </li>
                      <li
                        className="wow slideInUp"
                        data-wow-offset={50}
                        data-wow-delay=".30s"
                      >
                        {" "}
                        <span>Email address:</span>{" "}<br/>
                        <p className="gray-clr"> info@bongoexpresscourier.com </p>{" "}
                      </li>
                    </ul>
                  </div>
                  {/* <div className="delivery-img pt-10">
                      <img
                        alt=""
                        src="assets/img/block/support.png"
                        className="wow slideInLeft"
                        data-wow-offset={50}
                        data-wow-delay=".20s"
                      />
                    </div> */}
                </div>
              </div>
            </section>
            {/* /.Contact us */}
          </article>
          {/* /.Content Wrapper */}
          {/* Footer */}
          <Footer />
          {/* /.Footer */}
        </main>
        {/* / Main Wrapper */}
        {/* Top */}
        <div className="to-top theme-clr-bg transition">
          {" "}
          <i className="fa fa-angle-up" />{" "}
        </div>

        {/* Search Popup */}
        <div className="search-popup">
          <div>
            <div className="popup-box-inner">
              <form>
                <input
                  className="search-query"
                  type="text"
                  placeholder="Search and hit enter"
                />
              </form>
            </div>
          </div>
          <a href="javascript:void(0)" className="close-search">
            <i className="fa fa-close" />
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { load, trackingNo } = state.General;
  return { load, trackingNo };
};
export default connect(mapStateToProps, { getFormDetails, trackProducts })(
  index
);
