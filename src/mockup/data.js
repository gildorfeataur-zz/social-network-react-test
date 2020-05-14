import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  data: {
    profile: {
      posts: [
        { id: 1, message: "Heya!", likesCount: 12 },
        { id: 2, message: "How are you?", likesCount: 22 },
        { id: 3, message: "What's new?", likesCount: 2 },
      ],
      myPostValue: "",
    },
    messages: {
      dialogs: [
        { id: 1, name: "Bohdan" },
        { id: 2, name: "Sergey" },
        { id: 3, name: "Alex" },
      ],
      messages: [
        { id: 1, message: "Heya!" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "What's new?" },
      ],
      myMessageValue: "",
    },
    sidebar: {},
  },

  _rerenderAll() {
    console.log("full re-render");
  },

  subscriber(observer) {
    this._rerenderAll = observer;
  },

  dispatch(action) {
    this.data.profile = profileReducer(this.data.profile, action);

    this.data.messages = messagesReducer(this.data.messages, action);

    this.data.sidebar = sidebarReducer(this.data.sidebar, action);

    this._rerenderAll(this.data);
  },
};

window.mockup = store;

export default store;
