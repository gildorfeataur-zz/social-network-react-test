import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import DialogPage from "./pages/DialogPage";
import ProfilePage from "./pages/ProfilePage";

import "./app.scss";

function App({ store, state }) {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/profile" render={() => <ProfilePage />} />
          <Route path="/dialogs" render={() => <DialogPage />} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
