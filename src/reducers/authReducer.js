import { authAPI } from "../api/api";

const SET_USER_DATA = "AUTH/SET_USER_DATA";
const UNSET_USER_DATA = "AUTH/UNSET_USER_DATA";
const SET_ERROR_MESSAGE = "AUTH/SET_ERROR_MESSAGE";
const SET_CAPTCHA_URL = "AUTH/SET_CAPTCHA_URL";

const initialState = {
  id: null,
  email: null,
  login: null,
  isLogin: false,
  message: null,
  captchaUrl: null,
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

    case SET_ERROR_MESSAGE: {
      return {
        ...state,
        message: action.data,
      };
    }

    case SET_CAPTCHA_URL: {
      return {
        ...state,
        captchaUrl: action.captcha,
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

const setErrorMessage = (data) => ({
  type: SET_ERROR_MESSAGE,
  data,
});

const setCaptchaUrl = (captcha) => ({
  type: SET_CAPTCHA_URL,
  captcha,
});

// THUNKs

export const sendLoginRequest = (credentials) => async (dispatch) => {
  const response = await authAPI.sendLoginRequest(credentials);
  if (response.resultCode === 0) {
    dispatch(sendCheckRequest());
  }
  if (response.resultCode === 10) {
    dispatch(setErrorMessage(response.messages[0]));
    dispatch(getCaptchaUrl());
  } else {
    dispatch(setErrorMessage(response.messages[0]));
  }
};

export const sendLogoutRequest = () => async (dispatch) => {
  const response = await authAPI.sendLogoutRequest();
  if (response.resultCode === 0) {
    dispatch(unsetUserData());
  }
};

export const sendCheckRequest = () => async (dispatch) => {
  const response = await authAPI.sendCheckRequest();
  if (response.resultCode === 0) {
    dispatch(setUserData(response.data));
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await authAPI.getCaptchaUrl();
  const captcha = response.url;

  dispatch(setCaptchaUrl(captcha));
};

export default authReducer;
