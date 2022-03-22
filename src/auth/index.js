import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./login";
import Register from "./register";
import Success from "../reuseables/successCard";
import { withRouter } from "react-router-dom";
import Modal from "../reuseables/modal";
import {switchAuthForm} from "../redux/actions"

class index extends Component {
  render() {
    const { authForm } = this.props;
    return (
      <div>
        {authForm == 1 ? 
        <Modal
        closeModal={() => this.props.switchAuthForm(0)}
        modalDetail={<Login />}/> : authForm == 2 ? 
        <Modal
        closeModal={() => this.props.switchAuthForm(0)}
        modalDetail={<Register/>}/>
        : authForm == 4 ? 
        <Modal
        closeModal={() => this.props.switchAuthForm(0)}
        modalDetail={<Success />}/>
        :
         ""
        }
         
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { authForm } = state.General;
  const { auth } = state.Auth;
  return {
    authForm,
    auth,
  };
};

export default withRouter(connect(mapStateToProps, {switchAuthForm})(index));
