import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
  auth: authReducer,
  profilePage: profileReducer,
  dialogsPage: messagesReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
});

let store = createStore(reducers);

// allowed show store to console
window.store = store;
//

export default store;
