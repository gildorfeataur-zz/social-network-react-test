import { connect } from "react-redux";
import {
  addMessageCreator,
  messageChangeCreator,
} from "../../../reducers/messagesReducer";
import DialogsMessages from "../DialogsMessages";
import withLoginRedirect from "../../../hoc/withLoginRedirect";
import { compose } from "redux";

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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLoginRedirect
)(DialogsMessages);
