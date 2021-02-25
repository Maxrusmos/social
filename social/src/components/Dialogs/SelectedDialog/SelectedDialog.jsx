import React from 'react';
import CreateNewMessage from './CreateNewMessage/CreateNewMessage';
import Message from './Message/Message';
import './selectedDialog.css';

const SelectedDialog = (props) => {
  let messagesElements = props.messagesData.map(m => <Message message={m.message}></Message>);

  return (
    <>
      <div className="selected-dialog">
        <h2>Выбранный Диалог</h2>
        <hr/>
        <div className="messageElements-helper-block">
          {messagesElements}
        </div>
        <div className="newMessage">
          <CreateNewMessage></CreateNewMessage>
        </div>
      </div>
    </>
  )
}

export default SelectedDialog;