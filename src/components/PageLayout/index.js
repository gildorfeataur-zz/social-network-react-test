import React from "react";

import styles from "./index.module.scss";

function PageLayout({ children }) {
  return <main className={styles.container}>{children}</main>;
}

export default PageLayout;
