import React from "react";
import { connect } from "react-redux";
import { sendLoginRequest } from "../../reducers/authReducer";
import { Redirect } from "react-router-dom";
import LoginForm from "../LoginForm";

function LoginContainer(props) {
  const handleSubmit = (data) => {
    console.log(data);
    props.sendLoginRequest(data);
  };

  return (
    <div>
      <h3>Login form</h3>

      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { isLogin: state.auth.isLogin };
};

export default connect(mapStateToProps, { sendLoginRequest })(LoginContainer);
