import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  auth: authReducer,
  profilePage: profileReducer,
  dialogsPage: messagesReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

// allowed show store to console
window.store = store;
//

export default store;
