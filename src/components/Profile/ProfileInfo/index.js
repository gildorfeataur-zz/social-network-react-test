import React from "react";
import Preloader from "./../../Preloader";
import avatar from "./../../../images/avatar-default.png";

import styles from "./index.module.scss";

function ProfileInfo({ profile, myAuthData, status, onAvatarChange }) {
  if (myAuthData) {
    return (
      <React.Fragment>
        {profile ? (
          <div className={styles.container}>
            <img
              src={profile.photos.large || avatar}
              alt="profile-header-img"
              className={styles.avatar}
            />
            <section>
              <input type="file" onChange={onAvatarChange} />
            </section>
            <section>
              <h3>Information</h3>
              <p>Name: {profile.fullName}</p>
              <p>ID: {profile.userId}</p>
            </section>
          </div>
        ) : (
          <Preloader />
        )}
      </React.Fragment>
    );
  } else
    return (
      <React.Fragment>
        {profile ? (
          <div className={styles.container}>
            <img
              src={profile.photos.large || avatar}
              alt="profile-header-img"
              className={styles.avatar}
            />
            <section>
              <b>Information</b>
              <p>Name: {profile.fullName}</p>
              <p>ID: {profile.userId}</p>
              <p>About me: {profile.aboutMe}</p>
            </section>
            <section>
              <p>Status: {status}</p>
            </section>
          </div>
        ) : (
          <Preloader />
        )}
      </React.Fragment>
    );
}

export default ProfileInfo;
