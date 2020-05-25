import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { isLogin: state.auth.isLogin };
};

function withLoginRedirect(Component) {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isLogin) {
        return <Redirect to="/login" />;
      } else return <Component {...this.props} />;
    }
  }
  return connect(mapStateToProps)(RedirectComponent);
}

export default withLoginRedirect;
