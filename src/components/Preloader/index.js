import React from "react";

import styles from "./index.module.scss";

function Preloader() {
  return (
    <div className={styles.skypeLoader}>
      <div className={styles.dot}>
        <div className={styles.first}></div>
      </div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
}

export default Preloader;
