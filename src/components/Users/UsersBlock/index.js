import React from "react";

import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";

function UsersBlock({ user, changeFollowing, isLoadingStack }) {
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
          <button
            disabled={isLoadingStack.some((id) => id === user.id)}
            onClick={(e) => changeFollowing(user)}
            type="button"
            className={styles.btn}
          >
            UnFollow
          </button>
        ) : (
          <button
            disabled={isLoadingStack.some((id) => id === user.id)}
            onClick={(e) => changeFollowing(user)}
            type="button"
            className={styles.btn}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
}

export default UsersBlock;
