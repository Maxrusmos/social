import React from 'react';
import './dialogs.css';
import DialogSwitch from './DialogSwitch/DialogSwitch';
import SelectedDialog from './SelectedDialog/SelectedDialog';

const Dialogs = (props) => {
  return (
    <>
      <div className="main-dialogs-container">
        <DialogSwitch dialogsData={props.store.getState().dialogPage.dialogsData}></DialogSwitch>
        <SelectedDialog store={props.store}></SelectedDialog>
      </div>
    </>
  )
}

export default Dialogs;