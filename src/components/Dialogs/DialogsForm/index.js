import React from "react";

import styles from "./index.module.scss";
import { Field, reduxForm } from "redux-form";

function DialogsForm({ ...props }) {
  return (
    <form className={styles.textarea} onSubmit={props.handleSubmit}>
      <Field
        component="textarea"
        name="newMessage"
        placeholder="Enter your message"
      />
      {/* <textarea value={props.valuevalue} onChange={onChange}></textarea> */}
      <button type="submit">Add message</button>
    </form>
  );
}

const DialogsReduxForm = reduxForm({
  form: "dialogsMessage",
})(DialogsForm);

export default DialogsReduxForm;
