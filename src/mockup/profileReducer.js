const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      state.posts.push({
        id: state.posts.length + 1,
        message: String(state.myPostValue),
        likesCount: 0,
      });

      state.myPostValue = "";
      return state;

    case UPDATE_POST_TEXT:
      state.myPostValue = action.text;
      return state;

    default:
      return state;
  }
};

export const addPostCreator = () => ({
  type: ADD_POST,
});

export const textChangeCreator = (text) => ({
  type: UPDATE_POST_TEXT,
  text: text,
});

export default profileReducer;
