import React from "react";

import styles from "./index.module.scss";

function ProfilePost({ message, likes }) {
  return (
    <div className={styles.container}>
      <p>{message}</p>
      <p>You got {likes} likes</p>
    </div>
  );
}

export default ProfilePost;
