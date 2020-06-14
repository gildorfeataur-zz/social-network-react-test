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

function ProfileContainer({
  profile,
  getUserProfile,
  getUserStatus,
  ...props
}) {
  React.useState(() => {
    let userId = props.match.params.userId;
    getUserProfile(userId);
    getUserStatus(userId);
  }, []);

  return (
    <React.Fragment>
      <ProfileInfo profile={profile} {...props} />
    </React.Fragment>
  );
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
