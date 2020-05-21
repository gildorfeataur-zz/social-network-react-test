import React from "react";

import styles from "./index.module.scss";
import HeaderContainer from "../HeaderContainer";

function PageLayout({ children }) {
  return (
    <div>
      <HeaderContainer />
      <main className={styles.container}>{children}</main>
    </div>
  );
}

export default PageLayout;
