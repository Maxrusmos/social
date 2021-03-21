import React from "react";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../../redux/profileReducer";
import CreatePost from "./CreatePost";

const CreatePostContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextCreator(text);
    props.store.dispatch(action);
  };

  return (
    <>
      <CreatePost
        updateNewPostText={onPostChange}
        addPost={addPost}
        posts={state.profilePage.postsData}
        newPostText={state.profilePage.newPostText}
      ></CreatePost>
    </>
  );
};

export default CreatePostContainer;
