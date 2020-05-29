import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getUserProfile,
  getUserStatus,
  updateStatus,
} from "../../../reducers/profileReducer";

import ProfileInfo from "./../ProfileInfo";
import withLoginRedirect from "../../../hoc/withLoginRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <React.Fragment>
        <ProfileInfo profile={this.props.profile} {...this.props} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateStatus,
  }),
  withRouter,
  withLoginRedirect
)(ProfileContainer);
