import React from "react";
import PageLayout from "../../components/PageLayout";
import DialogsContainer from "../../components/Dialogs/DialogsContainer";
import DialogsNav from "../../components/Dialogs/DialogsNav";

import styles from "./index.module.scss";

function DialogPage() {
  return (
    <PageLayout>
      <h1>Dialogs</h1>

      <div className={styles.container}>
        <DialogsNav />

        <section className={styles.content}>
          <DialogsContainer />
        </section>
      </div>
    </PageLayout>
  );
}

export default DialogPage;
