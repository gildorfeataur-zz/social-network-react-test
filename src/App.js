import React from "react";
import "./app.scss";

import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import Dialogs from "./components/Dialogs";
import Profile from "./components/Profile";
import PageLayout from "./components/PageLayout";

function App() {
  return (
    <React.Fragment>
      <Header />

      <PageLayout>
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
        </Switch>
      </PageLayout>
    </React.Fragment>
  );
}

export default App;
