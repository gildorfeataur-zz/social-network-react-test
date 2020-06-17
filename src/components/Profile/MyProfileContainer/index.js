import React from "react";
import { connect } from "react-redux";
import {
  addPost,
  getUserProfile,
  getUserStatus,
  updateStatus,
  uploadAvatar,
} from "../../../reducers/profileReducer";

import ProfileInfo from "../ProfileInfo";
import ProfilePosts from "../ProfilePosts";
import { withRouter } from "react-router-dom";
import MyProfileStatus from "../MyProfileStatus";
import withLoginRedirect from "../../../hoc/withLoginRedirect";
import { compose } from "redux";
import { reset } from "redux-form";
import MyProfilePostsForm from "../MyProfilePostsForm";

function MyProfileContainer({
  auth,
  data,
  status,
  dispatch,
  updateStatus,
  getUserProfile,
  getUserStatus,
}) {
  React.useEffect(() => {
    getUserProfile(auth.id);
    getUserStatus(auth.id);
  }, [auth.id, getUserProfile, getUserStatus]);

  const handleSendMessage = (data) => {
    addPost(data.newMessage);
    dispatch(reset("myPosts"));
  };

  const handleAvatarChange = (e) => {
    if (e.target.files.length) {
      uploadAvatar(e.target.files[0]);
    }
  };

  return (
    <React.Fragment>
      <ProfileInfo
        profile={data.profile}
        myAuthData={auth}
        onAvatarChange={handleAvatarChange}
      />

      <MyProfileStatus
        myAuthData={auth}
        userStatus={status}
        updateStatus={updateStatus}
      />

      <MyProfilePostsForm onSubmit={handleSendMessage} />

      <ProfilePosts posts={data.posts} />
    </React.Fragment>
  );
}

let mapStateToProps = (state) => {
  return {
    data: state.profilePage,
    auth: state.auth,
    status: state.profilePage.status,
  };
};

export default compose(
  connect(mapStateToProps, {
    addPost,
    getUserProfile,
    getUserStatus,
    updateStatus,
    uploadAvatar,
  }),
  withRouter,
  withLoginRedirect
)(MyProfileContainer);
