import React from "react";
import CreatePost from "./CreatePost/CreatePost";
import Post from "./Post/Post";
import "./postComponent.css";

const PostComponent = (props) => {
  let postsElements = props.postsData.map((p) => (
    <Post profilePhotoUrl={props.profilePhotoUrl} message={p.message} likesCount={p.likesCount}></Post>
  ));

  return (
    <>
      <div className="create-post-block">
        <CreatePost
          newPostText={props.newPostText}
          dispatch={props.dispatch}
        ></CreatePost>
      </div>
      <div className="my-posts">
        <h2>Posts</h2>
        {postsElements}
      </div>
    </>
  );
};

export default PostComponent;
