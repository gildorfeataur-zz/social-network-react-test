import React from "react";
import ProfilePosts from "./ProfilePosts";
import ProfileInfo from "./ProfileInfo";

function Profile() {
  return (
    <React.Fragment>
      <h1>Profile</h1>
      <ProfileInfo />
      <ProfilePosts />
    </React.Fragment>
  );
}

export default Profile;
