import React from "react";
import store from "./mockup/reduxStore";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DialogPage from "./pages/DialogPage";
import ProfilePage from "./pages/ProfilePage";

import "./app.scss";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/profile" render={() => <ProfilePage />} />
          <Route path="/dialogs" render={() => <DialogPage />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
