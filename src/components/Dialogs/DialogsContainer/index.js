import { connect } from "react-redux";
import {
  addMessageCreator,
  messageChangeCreator,
} from "../../../mockup/messagesReducer";
import DialogsMessages from "../DialogsMessages";

let mapStateToProps = (state) => {
  return { data: state.dialogsPage };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleSendMessage: () => {
      dispatch(addMessageCreator());
    },
    handleMessageChange: (e) => {
      dispatch(messageChangeCreator(String(e.target.value)));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogsMessages);
