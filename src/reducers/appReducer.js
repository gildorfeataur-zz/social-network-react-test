import { sendCheckRequest } from "./authReducer";

const SET_INIT = "SET_INIT";

let initialState = {
  init: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INIT: {
      return {
        ...state,
        init: true,
      };
    }

    default:
      return state;
  }
};

const setAppInit = () => ({
  type: SET_INIT,
});

// THUNKs

export const initApp = () => {
  return (dispatch) => {
    dispatch(sendCheckRequest()).then(() => {
      dispatch(setAppInit());
    });
  };
};

export default appReducer;
