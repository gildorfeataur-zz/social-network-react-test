import React from "react";
import { connect } from "react-redux";
import { sendLoginRequest } from "../../reducers/authReducer";
import { Redirect } from "react-router-dom";
import LoginForm from "../LoginForm";

function LoginContainer({ errorMessage, isLogin, sendLoginRequest }) {
  const handleSubmit = (data) => {
    sendLoginRequest(data);
  };

  return (
    <div>
      <h3>Login form</h3>
      {isLogin ? (
        <Redirect to="/profile/my-profile" />
      ) : (
        <LoginForm errorMessage={errorMessage} onSubmit={handleSubmit} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { isLogin: state.auth.isLogin, errorMessage: state.auth.message };
};

export default connect(mapStateToProps, { sendLoginRequest })(LoginContainer);
