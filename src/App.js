import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import { initApp } from "./reducers/appReducer";
import { compose } from "redux";
import { BrowserRouter, withRouter, Switch } from "react-router-dom";
import { connect, Provider } from "react-redux";
import store from "./reducers/reduxStore";
import DialogPage from "./pages/DialogPage";
import ProfilePage from "./pages/ProfilePage";
import MyProfilePage from "./pages/MyProfilePage";
import LoginPage from "./pages/LoginPage";
import Preloader from "./components/Preloader";

import "./app.scss";

const UsersPage = React.lazy(() => import("./pages/UsersPage"));

class AppView extends React.Component {
  componentDidMount() {
    this.props.initApp();
  }

  render() {
    if (!this.props.init) {
      return <Preloader />;
    }
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

        <Route
          path="/users"
          render={() => (
            <Suspense fallback={<span>Loading Users...</span>}>
              <UsersPage />
            </Suspense>
          )}
        />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return { init: state.app.init };
};

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {
    initApp,
  })
)(AppView);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
