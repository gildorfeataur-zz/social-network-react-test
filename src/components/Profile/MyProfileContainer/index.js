import React from "react";
import { connect } from "react-redux";
import { addPost, textChange } from "../../../reducers/profileReducer";
import ProfileInfo from "../ProfileInfo";
import ProfilePosts from "../ProfilePosts";
import { withRouter } from "react-router-dom";

class MyProfileContainer extends React.Component {
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

let MyProfileRouter = withRouter(MyProfileContainer);

let mapStateToProps = (state) => {
  return { data: state.profilePage };
};

export default connect(mapStateToProps, {
  addPost,
  textChange,
})(MyProfileRouter);
