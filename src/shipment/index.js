import React, { Component } from "react";
import Footer from "../reusables/footer";
import MainNav from "../reusables/mainNav";
import TopBar from "../reusables/topBar";
import Login from "../auth";
import CreateShipment from "./createshipment";
import Modal from "../reusables/modal";
import { connect } from "react-redux";
import { switchAuthForm } from "../redux/actions";

class index extends Component {
  render() {
    const { trackingNo, authForm } = this.props;
    return (
      <div>
        {authForm == 3 ? (
          <Modal
            closeModal={() => this.props.switchAuthForm(0)}
            modalDetail={
              <div className="">
                <div className="login-wrap text-center">
                  <img src="../assets/img/icons/success.png" alt="success" />
                  <h5> Shipment Booked Successfully</h5>
                </div>
                <div className="create-accnt">
                  <p> Your Tracking Number is: </p>
                  <h2 className="">{trackingNo}</h2>
                </div>
              </div>
            }
          />
        ) : (
          ""
        )}
        <Login />
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
          <CreateShipment />
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
        {/* Popup: Login */}
        
        {/* /Popup: Login */}
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
  const { trackingNo } = state.Tracking;
  const { authForm } = state.General;
  return {
    trackingNo,
    authForm,
  };
};

export default connect(mapStateToProps, { switchAuthForm })(index);
