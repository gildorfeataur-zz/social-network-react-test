import React from "react";
import Preloader from "./../../Preloader";
import avatar from "./../../../images/avatar-default.png";

import styles from "./index.module.scss";

function ProfileInfo({ profile, myProfileData, status }) {
  if (myProfileData) {
    return (
      <React.Fragment>
        {profile ? (
          <div className={styles.container}>
            <img
              src={avatar}
              alt="profile-header-img"
              className={styles.avatar}
            />
            <section>
              <h3>Information</h3>
              <p>Name: {myProfileData.login}</p>
              <p>ID: {myProfileData.id}</p>
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
              src={profile.photos.large}
              alt="profile-header-img"
              className={styles.avatar}
            />
            <section>
              <p>Information</p>
              <p>Name: {profile.fullName}</p>
              <p>ID: {profile.userId}</p>
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
