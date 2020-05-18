const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT: {
      let newState = { ...state };
      newState.myMessageValue = action.text;
      return newState;
    }

    case SEND_MESSAGE:
      let newState = { ...state };
      newState.messages = [...state.messages];
      newState.messages.push({
        id: state.messages.length + 1,
        message: String(state.myMessageValue),
      });
      newState.myMessageValue = "";

      return newState;

    default:
      return state;
  }
};

export const addMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export const messageChangeCreator = (text) => ({
  type: UPDATE_MESSAGE_TEXT,
  text: text,
});

export default messagesReducer;
