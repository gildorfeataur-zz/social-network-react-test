import React from "react";

import styles from "./index.module.scss";

function PageLayout({ header, children }) {
  return (
    <div>
      {header}
      <main className={styles.container}>{children}</main>
    </div>
  );
}

export default PageLayout;
