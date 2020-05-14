import React from "react";
import ProfilePosts from "./ProfilePosts";
import ProfileInfo from "./ProfileInfo";

function Profile({ data, ...props }) {
  return (
    <React.Fragment>
      <h1>Profile</h1>
      <ProfileInfo />
      <ProfilePosts data={data} {...props} />
    </React.Fragment>
  );
}

export default Profile;
