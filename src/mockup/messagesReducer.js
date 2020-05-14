const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

const messagesReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT:
      state.myMessageValue = action.text;
      return state;

    case SEND_MESSAGE:
      let body = state.myMessageValue;
      state.myMessageValue = "";
      state.messages.push({
        id: state.messages.length + 1,
        message: String(body),
      });

      return state;

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
