import React from 'react';
import CreatePost from '../CreatePost/CreatePost';
import Post from '../Post/Post';
import './profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <>
      <div className="profile-container">
      <ProfileInfo></ProfileInfo>
        <div className="create-post-block">
          <CreatePost></CreatePost>
        </div>
        <div className="my-posts">
          <Post message="keke"></Post>
        </div>
      </div>
    </>
  )
}

export default Profile;