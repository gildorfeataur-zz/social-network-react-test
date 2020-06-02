import React from "react";
import { Field, reduxForm } from "redux-form";

function MyProfilePostsForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component="textarea"
        name="newMessage"
        placeholder="Enter your message"
      />
      <button type="submit">Add post</button>
    </form>
  );
}

const MyProfilePostsReduxForm = reduxForm({
  form: "myPosts",
})(MyProfilePostsForm);

export default MyProfilePostsReduxForm;
