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

// allowed show store to console
let store = createStore(reducers);
window.store = store;
//

export default store;
