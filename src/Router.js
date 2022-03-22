import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./home";
import About from "./about";
import Tracking from "./tracking";
import Quote from "./quote";
import Shipping from "./shipment";
import Dashboard from "./dashboard";

import { reinitializeUser } from "./redux/actions";
import { connect } from "react-redux";

class Router extends Component {
  componentWillMount() {
    this.props.reinitializeUser();
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/tracking" component={Tracking}></Route>
          <Route exact path="/quote" component={Quote}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route exact path="/createshipping" component={Shipping}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, { reinitializeUser })(Router);
