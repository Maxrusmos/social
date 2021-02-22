import React from 'react';
import Message from './Message/Message';
import './selectedDialog.css';

const SelectedDialog = (props) => {
  let messagesData = [
    {id: 1, message: "Привет!"}, 
    {id: 3, message: "Как дела?"}, 
    {id: 2, message: "Чем занят?"}, 
    {id: 4, message: "Сдал лабу?"}, 
    {id: 5, message: "Гулять пойдешь?"}
  ];

  let messagesElements = messagesData.map(m => <Message message={m.message}></Message>);

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