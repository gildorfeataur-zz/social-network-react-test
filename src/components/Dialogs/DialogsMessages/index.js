import React from "react";
import DialogsMessage from "../DialogsMessage";
import DialogsForm from "../DialogsForm";

function DialogsMessages({ data, handleSendMessage }) {
  return (
    <React.Fragment>
      {data.messages.map((item) => (
        <DialogsMessage key={item.id} message={item.message} />
      ))}

      <DialogsForm onSubmit={handleSendMessage} />
    </React.Fragment>
  );
}

export default DialogsMessages;
