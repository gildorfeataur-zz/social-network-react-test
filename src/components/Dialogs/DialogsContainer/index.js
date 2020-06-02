import { connect } from "react-redux";
import { addMessageCreator } from "../../../reducers/messagesReducer";
import DialogsMessages from "../DialogsMessages";
import withLoginRedirect from "../../../hoc/withLoginRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return { data: state.dialogsPage };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleSendMessage: (data) => {
      console.log(data);

      dispatch(addMessageCreator(data.newMessage));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLoginRedirect
)(DialogsMessages);
