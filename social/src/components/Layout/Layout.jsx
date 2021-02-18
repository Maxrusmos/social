import React from 'react';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import './layout.css';

const Layout = () => {
  return (
    <>
      <div className="container">
        <Header></Header>
        <div className="main">
          <Menu></Menu>
          <Profile></Profile>
        </div>
      </div>
    </>
  )
}

export default Layout;