const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "Heya!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "What's new?" },
  ],
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: state.messages.length + 1,
            message: action.message,
          },
        ],
      };

    default:
      return state;
  }
};

export const addMessage = (message) => ({
  type: SEND_MESSAGE,
  message,
});

export default messagesReducer;
