import React from 'react';
import { NavLink } from 'react-router-dom';
import './dialogSwitch.css';
import DialogSwitchItem from './DialogSwitchItem/DialogSwitchItem';


const DialogSwitch = (props) => {
  return (
    <>
      <div className="dialogs-switch">
        <h2>Select Chat</h2>
        <hr />
        <DialogSwitchItem name="Адиянов Роман" id="1"></DialogSwitchItem>
        <DialogSwitchItem name="Якупова Айгуль" id="2"></DialogSwitchItem>
        <DialogSwitchItem name="Жилин Даниил" id="3"></DialogSwitchItem>
        <DialogSwitchItem name="Стрижаков Андрей" id="4"></DialogSwitchItem>
        <DialogSwitchItem name="Лангавый Григорий" id="5"></DialogSwitchItem>

      </div>
    </>
  )
}

export default DialogSwitch;