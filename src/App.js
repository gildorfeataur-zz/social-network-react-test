import React from "react";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import Dialogs from "./components/Dialogs";
import Profile from "./components/Profile";
import PageLayout from "./components/PageLayout";
import data from "./mockup/data";

import "./app.scss";

function App() {
  return (
    <React.Fragment>
      <Header />

      <PageLayout>
        <Switch>
          <Route
            path="/profile"
            render={() => <Profile data={data.profile} />}
          />
          <Route
            path="/dialogs"
            render={() => <Dialogs data={data.messages} />}
          />
        </Switch>
      </PageLayout>
    </React.Fragment>
  );
}

export default App;
