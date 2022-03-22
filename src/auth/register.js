import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getFormDetails,
  registerCustomer,
  switchAuthForm,
} from "../redux/actions";
import Loader from "../reuseables/formLoader";

class Register extends Component {
  render() {
    const { name, email, password, registeringUser, regErr } = this.props;
    return (
      <div>
        <div className="login-wrap text-center">
          <h2 className="title-3">Register </h2>
          <p>
            {" "}
            Sign in to <strong> Bongo Express </strong>{" "}
          </p>
          <div className="login-form clrbg-before">
            <form className="login">
              <div className="form-group">
                <input
                  type="text"
                  value={name}
                  onChange={(e) =>
                    this.props.getFormDetails({
                      props: ["name"],
                      value: e.target.value,
                    })
                  }
                  placeholder="Name"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={email}
                  onChange={(e) =>
                    this.props.getFormDetails({
                      props: ["email"],
                      value: e.target.value,
                    })
                  }
                  placeholder="Email address"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  value={password}
                  onChange={(e) =>
                    this.props.getFormDetails({
                      props: ["password"],
                      value: e.target.value,
                    })
                  }
                  placeholder="Password"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <div
                  onClick={() =>
                    this.props.registerCustomer(name, email, password)
                  }
                  className="btn-1 "
                  type="submit"
                >
                  {" "}
                  {registeringUser ? <Loader /> : "Register"}{" "}
                </div>
              </div>
            </form>
            <p className="red t-12"> {regErr}</p>
            {/* <a href="#" className="gray-clr"> Forgot Passoword? </a> */}
          </div>
        </div>
        <div className="create-accnt">
          <a href="#" className="white-clr">
            {" "}
            Already registered?{" "}
          </a>
          <h2 className="title-2">
            {" "}
            <a
              onClick={() => this.props.switchAuthForm(1)}
              className="green-clr under-line"
            >
              Login
            </a>{" "}
          </h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, email, password } = state.General;
  const { registeringUser } = state.Loader;
  const { regErr } = state.Auth;
  return {
    name,
    email,
    password,
    registeringUser,
    regErr,
  };
};

export default connect(mapStateToProps, {
  getFormDetails,
  registerCustomer,
  switchAuthForm,
})(Register);
