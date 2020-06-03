import React from "react";
import { Field, reduxForm } from "redux-form";
import FormField from "../FormField";
import { required } from "../../utils/validators";

import styles from "./index.module.scss";

function LoginForm(props) {
  return (
    <form className={styles.container} onSubmit={props.handleSubmit}>
      <div className={styles.item}>
        <Field
          placeholder="Email"
          name="email"
          component={FormField}
          validate={[required]}
        />
      </div>
      <div className={styles.item}>
        <Field
          placeholder="Password"
          name="password"
          component={FormField}
          validate={[required]}
        />
      </div>
      <label className={styles.item}>
        <Field
          type="checkbox"
          name="rememberMe"
          placeholder=""
          component="input"
        />
        <span>Remember me</span>
      </label>
      <div className={styles.item}>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export default LoginReduxForm;
