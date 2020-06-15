import React from "react";
import { connect } from "react-redux";
import { addMessage } from "../../../reducers/messagesReducer";
import DialogsMessages from "../DialogsMessages";
import withLoginRedirect from "../../../hoc/withLoginRedirect";
import { compose } from "redux";
import DialogsNav from "../DialogsNav";
import DialogsReduxForm from "../DialogsForm";
import { reset } from "redux-form";

function DialogsContainer({ messages, addMessage, dispatch }) {
  const handleSendMessage = (data) => {
    addMessage(data.newMessage);
    dispatch(reset("dialogsMessage"));
  };

  return (
    <React.Fragment>
      <DialogsNav />

      <DialogsMessages messages={messages} />

      <DialogsReduxForm onSubmit={handleSendMessage} />
    </React.Fragment>
  );
}

let mapStateToProps = (state) => {
  return { messages: state.dialogsPage.messages };
};

export default compose(
  connect(mapStateToProps, {
    addMessage,
  }),
  withLoginRedirect
)(DialogsContainer);
