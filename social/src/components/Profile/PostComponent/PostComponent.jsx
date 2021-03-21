import React from "react";
import CreatePost from "./CreatePost/CreatePost";
import CreatePostContainer from "./CreatePost/CreatePostContainer";
import Post from "./Post/Post";
import "./postComponent.css";

const PostComponent = (props) => {
  let state = props.store.getState().profilePage;

  let postsElements = state.postsData.map((p) => (
    <Post profilePhotoUrl={state.profilePhotoUrl} message={p.message} likesCount={p.likesCount}></Post>
  ));

  return (
    <>
      <div className="create-post-block">
        <CreatePostContainer
          store={props.store}
        ></CreatePostContainer>
      </div>
      <div className="my-posts">
        <h2>Posts</h2>
        {postsElements}
      </div>
    </>
  );
};

export default PostComponent;
