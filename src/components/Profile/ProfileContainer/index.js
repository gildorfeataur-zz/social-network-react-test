import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../../reducers/profileReducer";
import ProfileInfo from "./../ProfileInfo";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <React.Fragment>
        <ProfileInfo profile={this.props.profile} {...this.props} />
      </React.Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return { profile: state.profilePage.profile };
};

export default connect(mapStateToProps, {
  setUserProfile,
})(ProfileContainer);
