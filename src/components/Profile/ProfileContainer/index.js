import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { openUserProfile } from "../../../reducers/profileReducer";

import ProfileInfo from "./../ProfileInfo";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.openUserProfile(userId);
  }

  render() {
    return (
      <React.Fragment>
        <ProfileInfo profile={this.props.profile} {...this.props} />
      </React.Fragment>
    );
  }
}

let ProfileRouter = withRouter(ProfileContainer);

const mapStateToProps = (state) => {
  return { profile: state.profilePage.profile };
};

export default connect(mapStateToProps, {
  openUserProfile,
})(ProfileRouter);
