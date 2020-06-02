import React from "react";
import { connect } from "react-redux";
import {
  addPost,
  getUserStatus,
  updateStatus,
} from "../../../reducers/profileReducer";
import { sendCheckUser } from "../../../reducers/authReducer";
import ProfileInfo from "../ProfileInfo";
import ProfilePosts from "../ProfilePosts";
import { withRouter } from "react-router-dom";
import MyProfileStatus from "../MyProfileStatus";
import withLoginRedirect from "../../../hoc/withLoginRedirect";
import { compose } from "redux";
import MyProfilePostsForm from "../MyProfilePostsForm";

class MyProfileContainer extends React.Component {
  componentDidMount() {
    this.props.sendCheckUser();
  }

  componentDidUpdate() {
    this.props.getUserStatus(this.props.auth.id);
  }

  handleSendMessage = (data) => {
    this.props.addPost(data.newMessage);
  };

  render() {
    return (
      <React.Fragment>
        <ProfileInfo
          profile={this.props.data}
          myProfileData={this.props.auth}
        />

        <MyProfileStatus
          myProfileData={this.props.auth}
          userStatus={this.props.status}
          updateStatus={this.props.updateStatus}
        />

        <MyProfilePostsForm onSubmit={this.handleSendMessage} />

        <ProfilePosts data={this.props.data} />
      </React.Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    data: state.profilePage,
    auth: state.auth,
    status: state.profilePage.status,
    login: state.auth.login,
  };
};

export default compose(
  connect(mapStateToProps, {
    addPost,
    getUserStatus,
    updateStatus,
    sendCheckUser,
  }),
  withRouter
  // withLoginRedirect
)(MyProfileContainer);
