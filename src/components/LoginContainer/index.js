import React from "react";
import { connect } from "react-redux";
import { sendLoginRequest } from "../../reducers/authReducer";
import { Redirect } from "react-router-dom";
import LoginForm from "../LoginForm";
// import Preloader from "../Preloader";

function LoginContainer(props) {
  const handleSubmit = (data) => {
    console.log(data);
    props.sendLoginRequest(data);
  };

  return (
    <div>
      <h3>Login form</h3>
      {props.isLogin ? (
        <Redirect to="/profile/my-profile" />
      ) : (
        <LoginForm onSubmit={handleSubmit} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { login: state.auth.login, isLogin: state.auth.isLogin };
};

export default connect(mapStateToProps, { sendLoginRequest })(LoginContainer);
