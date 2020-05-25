import React from "react";
import store from "./reducers/reduxStore";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DialogPage from "./pages/DialogPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";

import "./app.scss";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" render={() => <LoginPage />} />
          <Route path="/profile/:userId" render={() => <ProfilePage />} />
          <Route path="/dialogs" render={() => <DialogPage />} />
          <Route path="/users" render={() => <UsersPage />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
