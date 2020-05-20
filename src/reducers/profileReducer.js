const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Heya!", likesCount: 12 },
    { id: 2, message: "How are you?", likesCount: 22 },
    { id: 3, message: "What's new?", likesCount: 2 },
  ],
  myPostValue: "",
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
    default:
      return state;
  }
};

export const addPostCreator = () => ({
  type: ADD_POST,
});

export const textChangeCreator = (text) => ({
  type: UPDATE_POST_TEXT,
  text,
});

export default profileReducer;
