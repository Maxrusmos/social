import React from "react";
import PostComponent from "./PostComponent/PostComponent";
import "./profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <>
      <div className="profile-container">
        <ProfileInfo></ProfileInfo>
        <PostComponent store={props.store}></PostComponent>
      </div>
    </>
  );
};

export default Profile;
