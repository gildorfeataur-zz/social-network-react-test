import React from "react";
import DialogsMessage from "../DialogsMessage";

import styles from "./index.module.scss";

function DialogsMessages({ messages }) {
  return (
    <div className={styles.content}>
      {messages.map((item) => (
        <DialogsMessage key={item.id} message={item.message} />
      ))}
    </div>
  );
}

export default DialogsMessages;
