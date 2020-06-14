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
import MyProfilePostsForm from "../MyProfilePostsForm";

class MyProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfile(this.props.auth.id);
    this.props.getUserStatus(this.props.auth.id);
  }

  handleSendMessage = (data) => {
    this.props.addPost(data.newMessage);
  };

  handleAvatarChange = (e) => {
    if (e.target.files.length) {
      this.props.uploadAvatar(e.target.files[0]);
    }
  };

  render() {
    return (
      <React.Fragment>
        <ProfileInfo
          profile={this.props.data.profile}
          myAuthData={this.props.auth}
          onAvatarChange={this.handleAvatarChange}
        />

        <MyProfileStatus
          myAuthData={this.props.auth}
          userStatus={this.props.status}
          updateStatus={this.props.updateStatus}
        />

        <MyProfilePostsForm onSubmit={this.handleSendMessage} />

        <ProfilePosts posts={this.props.data.posts} />
      </React.Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    data: state.profilePage,
    auth: state.auth,
    status: state.profilePage.status,
    // login: state.auth.login,
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
