import React from "react";
import {
  addPostCreator,
  textChangeCreator,
} from "../../../mockup/profileReducer";

import ProfilePosts from "../ProfilePosts";
import StoreContext from "../../../StoreContext";

function ProfilePostsContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let data = store.getState();

        const handleAddPost = () => {
          store.dispatch(addPostCreator());
        };

        const handleChangeText = (e) => {
          store.dispatch(textChangeCreator(String(e.target.value)));
        };

        return (
          <ProfilePosts
            onTextChange={handleChangeText}
            onTextAdd={handleAddPost}
            data={data.profilePage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}

export default ProfilePostsContainer;
