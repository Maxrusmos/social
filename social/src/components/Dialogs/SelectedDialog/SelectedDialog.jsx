import React from 'react';
import Message from './Message/Message';
import './selectedDialog.css';

const SelectedDialog = (props) => {
  console.log(props);
  let messagesElements = props.messagesData.map(m => <Message message={m.message}></Message>);

  return (
    <>
      <div className="selected-dialog">
        <h2>Выбранный Диалог</h2>
        <hr/>
        {messagesElements}
      </div>
    </>
  )
}

export default SelectedDialog;