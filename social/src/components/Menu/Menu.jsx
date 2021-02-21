import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css';

const Menu = () => {
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