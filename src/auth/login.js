import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getFormDetails,
  loginCustomer,
  switchAuthForm,
} from "../redux/actions";
import Loader from "../reuseables/formLoader";

class Login extends Component {
  render() {
    const { email, password, loggingUser, loginErr } = this.props;

    return (
      <div>
        <div className="login-wrap text-center">
          <h2 className="title-3"> sign in </h2>
          <p>
            {" "}
            Sign in to <strong> Bongo Express </strong>
          </p>
          <div className="login-form clrbg-before">
            <form className="login">
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
                  className="btn-1 "
                  onClick={() => this.props.loginCustomer(email, password)}
                >
                  {loggingUser ? <Loader /> : " Sign in "}{" "}
                </div>
              </div>
            </form>
            <p className="red t-12"> {loginErr}</p>
            {/* <a href="#" className="gray-clr"> Forgot Passoword? </a> */}
          </div>
        </div>
        <div className="create-accnt">
          {/* <a href="#" className="white-clr">
            {" "}
            Don’t have an account?{" "}
          </a>
          <h2 data-toggle="modal" className="title-2">
            <a
              onClick={() => this.props.switchAuthForm(2)}
              className="green-clr under-line"
            >
              Create a free account
            </a>{" "}
          </h2> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { email, password } = state.General;
  const { loggingUser } = state.Loader;
  const {loginErr} = state.Auth
  return {
    email,
    password,
    loggingUser,
    loginErr
  };
};

export default connect(mapStateToProps, {
  getFormDetails,
  loginCustomer,
  switchAuthForm,
})(Login);
