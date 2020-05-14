import React from "react";
import {
  addPostCreator,
  textChangeCreator,
} from "../../../mockup/profileReducer";

import ProfilePosts from "../ProfilePosts";

function ProfilePostsContainer({ dispatch, ...props }) {
  const handleAddPost = () => {
    dispatch(addPostCreator());
  };

  const handleChangeText = (e) => {
    dispatch(textChangeCreator(String(e.target.value)));
  };

  return (
    <ProfilePosts
      onTextChange={handleChangeText}
      onTextAdd={handleAddPost}
      {...props}
    />
  );
}

export default ProfilePostsContainer;
