import React from 'react';
import { NavLink } from 'react-router-dom';
import './dialogSwitch.css';
import DialogSwitchItem from './DialogSwitchItem/DialogSwitchItem';

const DialogSwitch = (props) => {
  let dialogsElements = props.dialogsData.map(d => <DialogSwitchItem name={d.name} id={d.id} url={d.url}></DialogSwitchItem>);

  return (
      <div className="dialogs-switch">
        <h2>Выберите чат</h2>
        <hr />
        {dialogsElements}
      </div>
  )
}

export default DialogSwitch;