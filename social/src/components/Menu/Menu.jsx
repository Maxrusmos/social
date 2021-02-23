import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css';
import SideBar from './SideBar/SideBar';

const Menu = (props) => {
  return (
    <>
      <div className="menu">
        <NavLink className="nav-links" to="/profile">
          <div className="menu-item">
            Profile
          </div>
        </NavLink>
        <NavLink className="nav-links" to="/dialogs">
          <div className="menu-item">
            Messages
          </div>
        </NavLink>
        <NavLink className="nav-links" to="/news">
          <div className="menu-item">
            News
          </div>
        </NavLink>
        <NavLink className="nav-links" to="/music">
          <div className="menu-item">
            Music
          </div>
        </NavLink>
        <NavLink className="nav-links" to="/friends">
          <div className="menu-item">
            Friends
          </div>
        </NavLink>
        <hr/>
        <div className="friends-sideBar-block">
          <SideBar sideBarData={props.sideBarData}></SideBar>
        </div>
        <hr/>
        <NavLink className="nav-links" to="/settings">
          <div className="menu-item">
            Settings
          </div>
        </NavLink>
      </div>
    </>
  )
}

export default Menu;