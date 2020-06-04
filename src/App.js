import React from "react";
import { Route } from "react-router-dom";
import { sendCheckRequest } from "./reducers/authReducer";
import { compose } from "redux";
import { withRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import DialogPage from "./pages/DialogPage";
import ProfilePage from "./pages/ProfilePage";
import MyProfilePage from "./pages/MyProfilePage";
import LoginPage from "./pages/LoginPage";
import UsersPage from "./pages/UsersPage";

import "./app.scss";

class App extends React.Component {
  componentDidMount() {
    this.props.sendCheckRequest();
  }
  render() {
    return (
      <Switch>
        <Route path="/" exact render={() => <LoginPage />} />
        <Route path="/login" render={() => <LoginPage />} />
        <Route
          path="/profile/my-profile"
          exact
          render={() => <MyProfilePage />}
        />
        <Route path="/profile/:userId" render={() => <ProfilePage />} />
        <Route path="/dialogs" render={() => <DialogPage />} />
        <Route path="/users" render={() => <UsersPage />} />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return { isLogin: state.auth.isLogin };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    sendCheckRequest,
  })
)(App);
