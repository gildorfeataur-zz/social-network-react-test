import React from "react";
import PageLayout from "../../components/PageLayout";
import Header from "../../components/Header";
import DialogsContainer from "../../components/Dialogs/DialogsContainer";
import DialogsNav from "../../components/Dialogs/DialogsNav";

import styles from "./index.module.scss";

function DialogPage() {
  return (
    <PageLayout header={<Header />}>
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
