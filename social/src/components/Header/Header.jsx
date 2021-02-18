import React from 'react';
import logo from './../../res/logo.png';
import './header.css';

const Header = () => {
  return (
    <>
      <header>
        <img className="logo-image" src={logo} alt="logo"/>
        <div className="logo-text">GhostSocial</div>
      </header>
    </>
  )
}

export default Header;