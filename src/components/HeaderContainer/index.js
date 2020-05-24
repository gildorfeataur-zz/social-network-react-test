import React from "react";
import Header from "../Header";
import { connect } from "react-redux";
import { setUserData } from "../../reducers/authReducer";
import { userAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    userAPI.sendLogin().then((response) => {
      if (response.resultCode === 0) {
        this.props.setUserData(response.data);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return { login: state.auth.login, isLogin: state.auth.isLogin };
};

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
