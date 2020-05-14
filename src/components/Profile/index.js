import React from "react";
import ProfileInfo from "./ProfileInfo";
import ProfilePostsContainer from "./ProfilePostsContainer";

function Profile({ data, ...props }) {
  return (
    <React.Fragment>
      <h1>Profile</h1>
      <ProfileInfo />
      <ProfilePostsContainer data={data} {...props} />
    </React.Fragment>
  );
}

export default Profile;
