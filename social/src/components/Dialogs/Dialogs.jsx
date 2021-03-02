import React from 'react';
import './dialogs.css';
import DialogSwitch from './DialogSwitch/DialogSwitch';
import SelectedDialog from './SelectedDialog/SelectedDialog';

const Dialogs = (props) => {
  return (
    <>
      <div className="main-dialogs-container">
        <DialogSwitch dialogsData={props.dialogsData}></DialogSwitch>
        <SelectedDialog newMessageText={props.newMessageText} messagesData={props.messagesData} dispatch={props.dispatch}></SelectedDialog>
      </div>
    </>
  )
}

export default Dialogs;