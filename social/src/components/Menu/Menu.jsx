import React from 'react';
import './menu.css';
const Menu = () => {
  return (
    <>
      <div className="menu">
        <div className="menu-item">
          <a>Profile</a>
        </div>
        <div className="menu-item">
          <a>Messages</a>
        </div>
        <div className="menu-item">
          <a>News</a>
        </div>
        <div className="menu-item">
          <a>Music</a>
        </div>
        <div className="menu-item">
          <a>Settings</a>
        </div>
      </div>
    </>
  )
}

export default Menu;