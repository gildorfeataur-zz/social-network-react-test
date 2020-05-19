import { connect } from "react-redux";
import {
  addPostCreator,
  textChangeCreator,
} from "../../../reducers/profileReducer";
import ProfilePosts from "../ProfilePosts";

let mapStateToProps = (state) => {
  return { data: state.profilePage };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleAddPost: () => {
      dispatch(addPostCreator());
    },
    handleChangeText: (e) => {
      dispatch(textChangeCreator(String(e.target.value)));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePosts);
