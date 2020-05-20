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
      return {
        ...state,
        myMessageValue: action.text,
      };
    }

    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: state.messages.length + 1,
            message: String(state.myMessageValue),
          },
        ],
        myMessageValue: "",
      };

    default:
      return state;
  }
};

export const addMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export const messageChangeCreator = (text) => ({
  type: UPDATE_MESSAGE_TEXT,
  text,
});

export default messagesReducer;
