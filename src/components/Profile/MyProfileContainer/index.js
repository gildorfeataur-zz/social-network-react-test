import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import { addPost, textChange } from "../../../reducers/profileReducer";
import ProfileInfo from "../ProfileInfo";
import ProfilePosts from "../ProfilePosts";

class MyProfileContainer extends React.Component {
  // componentDidMount() {
  //   axios
  //     .get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       this.props.setUserProfile(response.data);
  //     });
  // }

  handlerTextSend = () => {
    this.props.addPost();
  };

  handlerTextChange = (e) => {
    this.props.textChange(String(e.target.value));
  };

  render() {
    return (
      <React.Fragment>
        <ProfileInfo />
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
  return { data: state.profilePage };
};

export default connect(mapStateToProps, {
  addPost,
  textChange,
})(MyProfileContainer);
