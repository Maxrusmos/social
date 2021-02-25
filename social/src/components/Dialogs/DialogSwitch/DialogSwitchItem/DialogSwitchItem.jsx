import React from "react";
import './dialogSwitchItem.css';
import { NavLink } from 'react-router-dom';

const DialogSwitchItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <>
      <NavLink className="navs" to={path}>
        <div className="dialog-switch-item">
          <div>{props.name}</div>
          <img src={props.url}/>
        </div>
      </NavLink>
    </>
  )
}

export default DialogSwitchItem;