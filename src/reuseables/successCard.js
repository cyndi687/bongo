import React, { Component } from "react";
import { connect } from "react-redux";
import { switchAuthForm } from "../redux/actions";

class Success extends Component {
  render() {

    return (
      <div>
        <div className="login-wrap text-center">
          <img src="../assets/img/icons/success.png" alt="success" />
          <h5> Registration Sucessful!</h5>
        </div>
        <div className="create-accnt">
          <h2 data-toggle="modal" className="title-2">
            <a
              onClick={() => this.props.switchAuthForm(1)}
              className="green-clr under-line"
            >
              Back to Login
            </a>
          </h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {state};
};

export default connect(mapStateToProps, { switchAuthForm })(Success);
