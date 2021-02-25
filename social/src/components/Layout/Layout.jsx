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
import Friends from '../Friends/Friends';

const Layout = (props) => {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header></Header>
          <div className="main">
            <Menu sideBarData={props.sideBarData}></Menu>
            <div className="app-wrapper-content">
              <Route path="/profile" render={ () => <Profile postsData={props.postsData} addPost={props.addPost}></Profile> }></Route>
              <Route path="/dialogs" render={ () => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}></Dialogs> }></Route>
              <Route path="/news" render={ () => <News></News> }></Route>
              <Route path="/music" render={ () => <Music></Music> }></Route>
              <Route path="/friends" render={ () => <Friends></Friends>}></Route>
              <Route path="/settings" render={ () => <Settings></Settings> }></Route>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default Layout;