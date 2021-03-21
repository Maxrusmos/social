import React from "react";
import "./createNewMessage.css";
import {
  sendMessageCreator,
  updateNewMessageTextCreator,
} from "../../../../redux/dialogsReducer";
import CreateNewMessage from "./CreateNewMessage";

const CreateNewMessageContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onSendMessageButtonClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChanged = (newMessageTextBody) => {
    props.store.dispatch(updateNewMessageTextCreator(newMessageTextBody));
  };

  return (
    <>
      <CreateNewMessage updateNewMessageText={onNewMessageChanged} sendMessage={onSendMessageButtonClick} dialogsPage={state}></CreateNewMessage>
    </>
  );
};

export default CreateNewMessageContainer;