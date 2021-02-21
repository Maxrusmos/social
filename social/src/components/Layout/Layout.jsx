import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';
import News from '../News/News';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import './layout.css';

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header></Header>
          <div className="main">
            <Menu></Menu>
            <div className="app-wrapper-content">
              <Route path="/dialogs" component={Dialogs}></Route>
              <Route path="/profile" component={Profile}></Route>
              <Route path="/news" component={News}></Route>
              <Route path="/music" component={Music}></Route>
              <Route path="/settings" component={Settings}></Route>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default Layout;