import React from "react";
import "./sideBar.css";

const SideBar = (props) => {
  let sideBarPhotosElements = props.sideBarData.map(p => <img className="friend-photo" src={p.url}></img>);

  return (
    <div className="sideBar-container">
      {sideBarPhotosElements}
    </div>
  );
};

export default SideBar;
