import React from 'react';
import './dialogs.css';
import DialogSwitch from './DialogSwitch/DialogSwitch';
import SelectedDialog from './SelectedDialog/SelectedDialog';

const Dialogs = (props) => {
  return (
    <>
      <div className="main-dialogs-container">
        <DialogSwitch></DialogSwitch>
        <SelectedDialog></SelectedDialog>
      </div>
    </>
  )
}

export default Dialogs;