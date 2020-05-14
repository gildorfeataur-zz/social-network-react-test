import React from "react";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import Dialogs from "./components/Dialogs";
import Profile from "./components/Profile";
import PageLayout from "./components/PageLayout";

import "./app.scss";

function App({ store, state }) {
  return (
    <React.Fragment>
      <Header />

      <PageLayout>
        <Switch>
          <Route
            path="/profile"
            render={() => (
              <Profile
                data={state.profileReducer}
                dispatch={store.dispatch.bind(store)}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                data={state.messagesReducer}
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
