import React from "react";
import ProfilePosts from "./ProfilePosts";
import ProfileInfo from "./ProfileInfo";

function Profile({ data }) {
  return (
    <React.Fragment>
      <h1>Profile</h1>
      <ProfileInfo />
      <ProfilePosts posts={data.posts} />
    </React.Fragment>
  );
}

export default Profile;
