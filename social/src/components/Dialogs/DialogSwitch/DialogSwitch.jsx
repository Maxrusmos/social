import React from 'react';
import { NavLink } from 'react-router-dom';
import './dialogSwitch.css';
import DialogSwitchItem from './DialogSwitchItem/DialogSwitchItem';


const DialogSwitch = (props) => {
  let dialogsData = [
    {id: 1, name: "Адиянов Роман"}, 
    {id: 2, name: "Якупова Айгуль"}, 
    {id: 3, name: "Жилин Даниил"}, 
    {id: 4, name: "Стрижаков Андрей"}, 
    {id: 5, name: "Лангавый Григорий"}
  ];

  let dialogsElements = dialogsData.map(d => <DialogSwitchItem name={d.name} id={d.id}></DialogSwitchItem>);

  return (
      <div className="dialogs-switch">
        <h2>Select Chat</h2>
        <hr />
        {dialogsElements}
      </div>
  )
}

export default DialogSwitch;