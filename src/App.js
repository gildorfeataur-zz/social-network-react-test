import React from "react";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import Dialogs from "./components/Dialogs";
import Profile from "./components/Profile";
import PageLayout from "./components/PageLayout";
import store from "./mockup/data";

import "./app.scss";

function App() {
  return (
    <React.Fragment>
      <Header />

      <PageLayout>
        <Switch>
          <Route
            path="/profile"
            render={() => (
              <Profile
                data={store.data.profile}
                dispatch={store.dispatch.bind(store)}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                data={store.data.messages}
                dispatch={store.dispatch.bind(store)}
              />
            )}
          />
        </Switch>
      </PageLayout>
    </React.Fragment>
  );
}

export default App;
