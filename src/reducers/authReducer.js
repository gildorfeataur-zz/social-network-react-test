import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const UNSET_USER_DATA = "UNSET_USER_DATA";

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

    case UNSET_USER_DATA: {
      return {
        ...state,
        id: null,
        email: null,
        login: null,
        isLogin: false,
      };
    }

    default:
      return state;
  }
};

const setUserData = (data) => ({
  type: SET_USER_DATA,
  data,
});

const unsetUserData = (data) => ({
  type: UNSET_USER_DATA,
  data,
});

// THUNKs

export const sendLoginRequest = (credentials) => {
  return (dispatch) => {
    authAPI.sendLoginRequest(credentials).then((response) => {
      if (response.resultCode === 0) {
        dispatch(setUserData(response.data));
      }
    });
  };
};

export const sendLogoutRequest = () => {
  return (dispatch) => {
    authAPI.sendLogoutRequest().then((response) => {
      if (response.resultCode === 0) {
        dispatch(unsetUserData());
      }
    });
  };
};

export const sendCheckRequest = () => {
  return (dispatch) => {
    authAPI.sendCheckRequest().then((response) => {
      if (response.resultCode === 0) {
        dispatch(setUserData(response.data));
      }
    });
  };
};

export default authReducer;
