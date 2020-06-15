import React from "react";
import PageLayout from "../../components/PageLayout";
import DialogsContainer from "../../components/Dialogs/DialogsContainer";

function DialogPage() {
  return (
    <PageLayout>
      <h1>Dialogs</h1>

      <DialogsContainer />
    </PageLayout>
  );
}

export default DialogPage;
