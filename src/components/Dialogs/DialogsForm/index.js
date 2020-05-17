import React from "react";

import styles from "./index.module.scss";

function DialogsForm({ value, onChange, onClick }) {
  return (
    <React.Fragment>
      <div className={styles.textarea}>
        <textarea value={value} onChange={onChange}></textarea>
        <button onClick={onClick}>Add message</button>
      </div>
    </React.Fragment>
  );
}

export default DialogsForm;
