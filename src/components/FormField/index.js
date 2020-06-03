import React from "react";

import styles from "./index.module.scss";

const FormField = ({
  textarea,
  input,
  placeholder,
  meta: { touched, error },
}) => {
  return (
    <div className={styles.container}>
      {textarea ? (
        <textarea {...input} placeholder={placeholder}></textarea>
      ) : (
        <input {...input} placeholder={placeholder} />
      )}
      {touched && error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default FormField;
