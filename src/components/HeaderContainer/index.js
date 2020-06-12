import React from "react";
import Header from "../Header";
import { connect } from "react-redux";
import { sendLogoutRequest } from "../../reducers/authReducer";
import { Redirect } from "react-router-dom";

function HeaderContainer({ isLogin, sendLogoutRequest, ...props }) {
  const handleLogout = () => {
    sendLogoutRequest();
  };

  return isLogin ? (
    <Header isLogin={isLogin} handleLogout={handleLogout} {...props} />
  ) : (
    <Redirect to="/login" />
  );
}

const mapStateToProps = (state) => {
  return { login: state.auth.login, isLogin: state.auth.isLogin };
};

export default connect(mapStateToProps, { sendLogoutRequest })(HeaderContainer);
