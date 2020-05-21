import React from "react";

import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";

function UsersBlock({ user, changeFollowing }) {
  return (
    <div className={styles.container}>
      <NavLink to={"profile/" + user.id}>
        <div className={styles.avatar}>
          <img src={user.photos.small} alt="user-avatar" />
        </div>
      </NavLink>
      <div className={styles.content}>
        <h4>{user.name}</h4>

        {user.followed ? (
          <button onClick={(e) => changeFollowing(user.id)} type="button">
            UnFollow
          </button>
        ) : (
          <button onClick={(e) => changeFollowing(user.id)} type="button">
            Follow
          </button>
        )}
      </div>
    </div>
  );
}

export default UsersBlock;
