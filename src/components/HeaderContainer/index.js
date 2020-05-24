import React from "react";
import Header from "../Header";
import { connect } from "react-redux";
import { sendLoginRequest } from "../../reducers/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.sendLoginRequest();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return { login: state.auth.login, isLogin: state.auth.isLogin };
};

export default connect(mapStateToProps, { sendLoginRequest })(HeaderContainer);
