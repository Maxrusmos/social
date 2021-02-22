import React from 'react';
import CreatePost from './CreatePost/CreatePost';
import Post from './Post/Post';
import './postComponent.css';

const PostComponent = (props) => {
  let postsData = [
    {id: 1, message: "Привет!", likesCount: 12}, 
    {id: 3, message: "Как дела?", likesCount: 12}, 
    {id: 2, message: "Чем занят?", likesCount: 12}, 
    {id: 4, message: "Сдал лабу?", likesCount: 12}, 
    {id: 5, message: "Смотри, мой первый пост!", likesCount: 12}
  ];

  let postsElements = postsData.map(p => <Post message={p.message} likesCount={p.likesCount}></Post>);

  return (
    <>
      <div className="create-post-block">
        <CreatePost></CreatePost>
      </div>
      <div className="my-posts">
      <h2>Posts</h2>
        {postsElements}
      </div>
    </>
  )
}

export default PostComponent;