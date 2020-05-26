import React from "react";
import Preloader from "./../../Preloader";

import styles from "./index.module.scss";

function ProfileInfo({ profile, myProfileData }) {
  if (myProfileData) {
    return (
      <React.Fragment>
        {profile ? (
          <div className={styles.container}>
            <img
              src="https://scontent.fiev20-1.fna.fbcdn.net/v/t1.0-9/61832348_1180378452123604_26620091336491008_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=99fseURgdzEAX_0QfCk&_nc_ht=scontent.fiev20-1.fna&oh=b38dad95c301002766550095569ce595&oe=5ED9B6DD"
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
            <section>Other information</section>
          </div>
        ) : (
          <Preloader />
        )}
      </React.Fragment>
    );
}

export default ProfileInfo;
