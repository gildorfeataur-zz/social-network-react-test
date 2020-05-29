import React from "react";
import { connect } from "react-redux";
import {
  addPost,
  textChange,
  getUserStatus,
  updateStatus,
} from "../../../reducers/profileReducer";
import ProfileInfo from "../ProfileInfo";
import ProfilePosts from "../ProfilePosts";
import { withRouter } from "react-router-dom";
import MyProfileStatus from "../MyProfileStatus";
import withLoginRedirect from "../../../hoc/withLoginRedirect";
import { compose } from "redux";

class MyProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserStatus(this.props.auth.id);
  }

  handlerTextSend = () => {
    this.props.addPost();
  };

  handlerTextChange = (e) => {
    this.props.textChange(String(e.target.value));
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
        <ProfilePosts
          data={this.props.data}
          onTextChange={this.handlerTextChange}
          onTextSend={this.handlerTextSend}
        />
      </React.Fragment>
    );
  }
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
    textChange,
    getUserStatus,
    updateStatus,
  }),
  withRouter,
  withLoginRedirect
)(MyProfileContainer);
