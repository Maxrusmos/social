import React from 'react';
import CreatePost from '../CreatePost/CreatePost';
import Post from '../Post/Post';
import './profile.css';

const Profile = () => {
  return (
    <>
      <div className="profile-container">
        <div className="profile-photo-info-block">
          <img className="profile-photo" src="https://sun9-7.userapi.com/impf/c636923/v636923360/1e63d/6mN15QamFa4.jpg?size=2560x1619&quality=96&proxy=1&sign=721436cd203cbf7db59b3c06cca45761&type=album" alt="profile photo"/>  
          <div className="text-info-block">
            <h2>Воробьёв Максим</h2>
            <div>
              <p>День рождения:</p>
              <p>12.11.1999</p>
            </div>
            <div>
              <p>Город:</p>
              <p>Москва</p>
            </div>
            <div>
              <p>Родной город:</p>
              <p>Екатеринбург</p>
            </div>
            <div>
              <p>Образование:</p>
              <p>МАИ</p>
            </div>
          </div>
        </div>
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