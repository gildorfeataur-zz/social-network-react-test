import React from "react";
import Header from "../Header";
import { connect } from "react-redux";
import { sendLogoutRequest } from "../../reducers/authReducer";
import { Redirect } from "react-router-dom";

function HeaderContainer(props) {
  const handleLogout = () => {
    props.sendLogoutRequest();
  };

  return props.isLogin ? (
    <Header {...props} handleLogout={handleLogout} />
  ) : (
    <Redirect to="/login" />
  );
}

const mapStateToProps = (state) => {
  return { login: state.auth.login, isLogin: state.auth.isLogin };
};

export default connect(mapStateToProps, { sendLogoutRequest })(HeaderContainer);
