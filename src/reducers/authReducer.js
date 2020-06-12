import { authAPI } from "../api/api";

const SET_USER_DATA = "AUTH/SET_USER_DATA";
const UNSET_USER_DATA = "AUTH/UNSET_USER_DATA";

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

export const sendLoginRequest = (credentials) => async (dispatch) => {
  let response = await authAPI.sendLoginRequest(credentials);
  if (response.resultCode === 0) {
    dispatch(sendCheckRequest());
  }
};

export const sendLogoutRequest = () => async (dispatch) => {
  let response = await authAPI.sendLogoutRequest();
  if (response.resultCode === 0) {
    dispatch(unsetUserData());
  }
};

export const sendCheckRequest = () => async (dispatch) => {
  let response = await authAPI.sendCheckRequest();
  if (response.resultCode === 0) {
    dispatch(setUserData(response.data));
  }
};

export default authReducer;
