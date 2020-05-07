import React from "react";
import ProfilePost from "../ProfilePost";

import styles from "./index.module.scss";

function ProfilePosts() {
  return (
    <div className={styles.container}>
      <h3>My posts</h3>
      <section>
        <textarea></textarea>
        <button>Add post</button>
      </section>
      <section>
        <ProfilePost message="lorem ipsum" likes="1" />
        <ProfilePost message="lorem ipsum sit dolor amet" likes="14" />
      </section>
    </div>
  );
}

export default ProfilePosts;
