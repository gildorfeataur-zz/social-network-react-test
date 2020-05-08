import React from "react";
import DialogsNavItem from "./DialogsNavItem";
import DialogsMessage from "./DialogsMessage";

import styles from "./index.module.scss";

function Dialogs({ data }) {
  return (
    <div>
      <h1>Dialogs</h1>
      <div className={styles.container}>
        <aside className={styles.aside}>
          <nav className={styles.nav}>
            {data.dialogs.map((dialog) => (
              <DialogsNavItem
                key={dialog.id}
                id={dialog.id}
                name={dialog.name}
              />
            ))}
          </nav>
        </aside>
        <section className={styles.content}>
          {data.messages.map((item) => (
            <DialogsMessage key={item.id} message={item.message} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Dialogs;
