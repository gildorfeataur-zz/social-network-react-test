import React from "react";
import Preloader from "./../../Preloader";

import styles from "./index.module.scss";

function ProfileInfo({ profile }) {
  return (
    <React.Fragment>
      {profile ? (
        <div className={styles.container}>
          <img
            // src="https://scontent.fiev20-1.fna.fbcdn.net/v/t1.0-9/61832348_1180378452123604_26620091336491008_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=99fseURgdzEAX_0QfCk&_nc_ht=scontent.fiev20-1.fna&oh=b38dad95c301002766550095569ce595&oe=5ED9B6DD"
            src={profile.photos.large}
            alt="profile-header-img"
            className={styles.avatar}
          />
          <section>Description</section>
          <section>Other information</section>
        </div>
      ) : (
        <Preloader />
      )}
    </React.Fragment>
  );
}

export default ProfileInfo;
