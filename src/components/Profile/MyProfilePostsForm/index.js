import React from "react";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../../utils/validators";
import FormField from "../../FormField";

import styles from "./index.module.scss";

const maxLength20 = maxLengthCreator(20);

function MyProfilePostsForm(props) {
  return (
    <form onSubmit={props.handleSubmit} className={styles.container}>
      <Field
        textarea
        component={FormField}
        name="newMessage"
        placeholder="Enter your message"
        validate={[required, maxLength20]}
      />
      <button type="submit" className={styles.btn}>
        Add post
      </button>
    </form>
  );
}

const MyProfilePostsReduxForm = reduxForm({
  form: "myPosts",
})(MyProfilePostsForm);

export default MyProfilePostsReduxForm;
