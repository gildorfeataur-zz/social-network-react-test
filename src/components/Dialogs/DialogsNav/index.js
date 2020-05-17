import React from "react";
import DialogsNavItem from "../DialogsNavItem";

import styles from "./index.module.scss";
import StoreContext from "../../../StoreContext";

function DialogsNav() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let data = store.getState();
        return (
          <aside className={styles.aside}>
            <nav className={styles.nav}>
              {data.dialogsPage.dialogs.map((dialog) => (
                <DialogsNavItem
                  key={dialog.id}
                  id={dialog.id}
                  name={dialog.name}
                />
              ))}
            </nav>
          </aside>
        );
      }}
    </StoreContext.Consumer>
  );
}

export default DialogsNav;
