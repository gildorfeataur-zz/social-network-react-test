import React from "react";
import { Field, reduxForm } from "redux-form";
import FormField from "../../FormField";

import styles from "./index.module.scss";
import { required, maxLengthCreator } from "../../../utils/validators";

const maxLength20 = maxLengthCreator(20);

function DialogsForm({ ...props }) {
  return (
    <form className={styles.textarea} onSubmit={props.handleSubmit}>
      <Field
        textarea
        component={FormField}
        name="newMessage"
        placeholder="Enter your message"
        validate={[required, maxLength20]}
      />
      <button type="submit">Add message</button>
    </form>
  );
}

const DialogsReduxForm = reduxForm({
  form: "dialogsMessage",
})(DialogsForm);

export default DialogsReduxForm;
