import React from 'react';
import CreateNewMessageContainer from './CreateNewMessage/CreateNewMessageContainer';
import Message from './Message/Message';
import './selectedDialog.css';

const SelectedDialog = (props) => {
  console.log(props);
  let state = props.store.getState().dialogPage;
  let messagesElements = state.messagesData.map(m => <Message message={m.message}></Message>);
  return (
    <>
      <div className="selected-dialog">
        <h2>Выбранный Диалог</h2>
        <hr/>
        <div className="messageElements-helper-block">
          {messagesElements}
        </div>
        <div className="newMessage">
          <CreateNewMessageContainer store={props.store}></CreateNewMessageContainer>
        </div>
      </div>
    </>
  )
}

export default SelectedDialog;