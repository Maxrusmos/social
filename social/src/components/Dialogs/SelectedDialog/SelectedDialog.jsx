import React from 'react';
import Message from './Message/Message';
import './selectedDialog.css';

const SelectedDialog = (props) => {
  return (
    <>
      <div className="selected-dialog">
        <h2>Выбранный Диалог</h2>
        <hr/>
        <Message message="Привет! Как дела?"></Message>
      </div>
    </>
  )
}

export default SelectedDialog;