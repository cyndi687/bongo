import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeActive } from "../redux/actions";

const MainNav = (props) => {
  const { activePage, auth} = props;

  return (
    <nav className="menu-bar font2-title1">
      <div className="theme-container container" >
        <div className="row">
          <div className="col-md-2 col-sm-2">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-logo" href="#">
              <img
                src="assets/img/logo/logo-black.png"
                height="50px"
                alt="logo"
              />
            </a>
          </div>
          <div className="col-md-10 col-sm-10 fs-12">
            <div id="navbar" className="collapse navbar-collapse no-pad">
              <ul className="navbar-nav theme-menu">
                <li className={window.location.pathname == "/" ? "active" : ""}>
                  <Link to="/">Home </Link>
                </li>
                <li
                  className={
                    window.location.pathname == "/about" ? "active" : ""
                  }
                >
                  {" "}
                  <Link to="/about">about</Link>{" "}
                </li>
                <li
                  className={
                    window.location.pathname == "/tracking" ? "active" : ""
                  }
                >
                  {" "}
                  <Link to="/tracking"> tracking </Link>{" "}
                </li>
                <li
                  className={
                    window.location.pathname == "/quote" ? "active" : ""
                  }
                >
                  {" "}
                  <Link to="/quote"> Get a quote</Link>{" "}
                </li>
                {auth == true ?
                <li
                  className={
                    window.location.pathname == "/dashboard"
                      ? "active"
                      : ""
                  }
                >
                   {" "}
                  <Link to="/dashboard"> Dashboard</Link>{" "}
                </li>: null
                }
                <li
                  className={
                    window.location.pathname == "/createshipping"
                      ? "active"
                      : ""
                  }
                >
                  {" "}
                  <Link to="/createshipping"> Book Shipment</Link>{" "}
                  <div id="google_translate_element"></div>

                </li>
                
                {/* <li onClick={()=>props.changeActive(5)} className={activePage == 5 ? "active" : ''}> <Link to='/quote'> contact </Link> </li> */}

                <li>
                  <span className="search fa fa-search theme-clr transition">
                    {" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  const { activePage } = state.General;
  const { auth } = state.Auth;
  return {
    activePage,
    auth
  };
};

export default connect(mapStateToProps, { changeActive })(MainNav);
