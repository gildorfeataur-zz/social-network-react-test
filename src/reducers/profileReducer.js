import { userAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  // posts: [
  //   { id: 1, message: "Heya!", likesCount: 12 },
  //   { id: 2, message: "How are you?", likesCount: 22 },
  //   { id: 3, message: "What's new?", likesCount: 2 },
  // ],
  // myPostValue: "",
  profile: null,
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
            message: String(state.myPostValue),
            likesCount: 0,
          },
        ],
        myPostValue: "",
      };
    }

    case UPDATE_POST_TEXT: {
      return {
        ...state,
        myPostValue: action.text,
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    default:
      return state;
  }
};

export const addPost = () => ({
  type: ADD_POST,
});

export const textChange = (text) => ({
  type: UPDATE_POST_TEXT,
  text,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

// THUNKs

export const openUserProfile = (userId) => {
  return (dispatch) => {
    userAPI.openUserProfile(userId).then((response) => {
      dispatch(setUserProfile(response));
    });
  };
};

export default profileReducer;
