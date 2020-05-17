import React from "react";
import {
  addMessageCreator,
  messageChangeCreator,
} from "../../../mockup/messagesReducer";
import DialogsMessage from "../DialogsMessage";
import DialogsForm from "../DialogsForm";
import StoreContext from "../../../StoreContext";

function DialogsContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let data = store.getState().dialogsPage;

        const handleSendMessage = () => {
          store.dispatch(addMessageCreator());
        };

        const handleMessageChange = (e) => {
          store.dispatch(messageChangeCreator(String(e.target.value)));
        };

        return (
          <React.Fragment>
            {data.messages.map((item) => (
              <DialogsMessage key={item.id} message={item.message} />
            ))}

            <DialogsForm
              value={data.myMessageValue}
              onChange={handleMessageChange}
              onClick={handleSendMessage}
            />
          </React.Fragment>
        );
      }}
    </StoreContext.Consumer>
  );
}

export default DialogsContainer;
