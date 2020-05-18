import React from "react";
import DialogsNavItem from "../DialogsNavItem";

import styles from "./index.module.scss";

function DialogsNav({ dialogs }) {
  return (
    <aside className={styles.aside}>
      <nav className={styles.nav}>
        {dialogs.map((dialog) => (
          <DialogsNavItem key={dialog.id} id={dialog.id} name={dialog.name} />
        ))}
      </nav>
    </aside>
  );
}

DialogsNav.defaultProps = {
  dialogs: [
    { id: 1, name: "Bohdan" },
    { id: 2, name: "Sergey" },
    { id: 3, name: "Alex" },
  ],
};

export default DialogsNav;
