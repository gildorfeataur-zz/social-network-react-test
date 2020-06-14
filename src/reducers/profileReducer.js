import { userAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const SET_USER_PHOTO = "PROFILE/SET_USER_PHOTO";

let initialState = {
  posts: [
    { id: 1, message: "Heya!", likesCount: 12 },
    { id: 2, message: "How are you?", likesCount: 22 },
    { id: 3, message: "What's new?", likesCount: 2 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            message: action.message,
            likesCount: 0,
          },
        ],
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    case SET_USER_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    case SET_USER_PHOTO: {
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photos,
        },
      };
    }

    default:
      return state;
  }
};

export const addPost = (message) => ({
  type: ADD_POST,
  message,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});

export const setUserPhoto = (photos) => ({
  type: SET_USER_PHOTO,
  photos,
});

// THUNKs

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await userAPI.getUserProfile(userId);
  dispatch(setUserProfile(response));
};

export const getUserStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(response));
};

export const updateStatus = (userId, status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    let response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response));
  }
};

export const uploadAvatar = (file) => async (dispatch) => {
  let response = await profileAPI.uploadAvatar(file);
  if (response.data.resultCode === 0) {
    dispatch(setUserPhoto(response.data.data.photos));
  }
};

export default profileReducer;
