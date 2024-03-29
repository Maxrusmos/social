import React from "react";
import { Route } from "react-router-dom";
import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import "./layout.css";
import Friends from "../Friends/Friends";

const Layout = (props) => {
  return (
    <>
      <div className="container">
        <Header></Header>
        <div className="main">
          <Menu sideBarData={props.sideBarData}></Menu>
          <div className="app-wrapper-content">
            <Route
              path="/profile"
              render={() => (
                <Profile
                  store={props.store}
                ></Profile>
              )}
            ></Route>
            <Route
              path="/dialogs"
              render={() => (
                <Dialogs
                  store={props.store}
                ></Dialogs>
              )}
            ></Route>
            <Route path="/news" render={() => <News></News>}></Route>
            <Route path="/music" render={() => <Music></Music>}></Route>
            <Route path="/friends" render={() => <Friends></Friends>}></Route>
            <Route
              path="/settings"
              render={() => <Settings></Settings>}
            ></Route>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
