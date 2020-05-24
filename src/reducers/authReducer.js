import { userAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isLogin: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isLogin: true,
      };
    }

    default:
      return state;
  }
};

export const setUserData = (data) => ({
  type: SET_USER_DATA,
  data,
});

// THUNKs

export const sendLoginRequest = () => {
  return (dispatch) => {
    userAPI.sendLoginRequest().then((response) => {
      if (response.resultCode === 0) {
        dispatch(setUserData(response.data));
      }
    });
  };
};

export default authReducer;
