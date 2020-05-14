import React from "react";
import ProfilePost from "../ProfilePost";
import {
  addPostCreator,
  textChangeCreator,
} from "../../../mockup/profileReducer";

import styles from "./index.module.scss";

function ProfilePosts({ data, dispatch }) {
  const handleAddPost = () => {
    dispatch(addPostCreator());
  };

  const handleChangeText = (e) => {
    dispatch(textChangeCreator(String(e.target.value)));
  };

  return (
    <div className={styles.container}>
      <h3>My posts</h3>
      <section>
        <textarea
          value={data.myPostValue}
          onChange={handleChangeText}
        ></textarea>
        <button onClick={handleAddPost}>Add post</button>
      </section>
      <section>
        {data.posts.map((post) => (
          <ProfilePost
            key={post.id}
            message={post.message}
            likes={post.likesCount}
          />
        ))}
      </section>
    </div>
  );
}

export default ProfilePosts;
