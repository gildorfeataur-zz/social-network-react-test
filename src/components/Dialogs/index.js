import React from "react";
import DialogsNavItem from "./DialogsNavItem";
import DialogsMessage from "./DialogsMessage";

import styles from "./index.module.scss";

function Dialogs() {
  return (
    <div>
      <h1>Dialogs</h1>
      <div className={styles.container}>
        <aside className={styles.aside}>
          <nav className={styles.nav}>
            <DialogsNavItem id="1" name="Dialog1" />
            <DialogsNavItem id="2" name="Dialog2" />
            <DialogsNavItem id="3" name="Dialog3" />
          </nav>
        </aside>
        <section className={styles.content}>
          <DialogsMessage message="Hi!" />
          <DialogsMessage message="Bro.." />
          <DialogsMessage message="How the tings?" />
        </section>
      </div>
    </div>
  );
}

export default Dialogs;
