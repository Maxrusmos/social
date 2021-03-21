import React from "react";
import "./createPost.css";
import attachPhoto from "./../../../../res/attachPhoto.png";
import attachFile from "./../../../../res/attachFile.png";
import attachMusic from "./../../../../res/attachMusic.png";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../../redux/profileReducer";

const CreatePost = (props) => {
  let addPostButtonClick = () => {
    props.dispatch(addPostCreator());
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewPostTextCreator(text));
  };

  return (
    <>
      <div className="posts">
        <h2>Create Post</h2>
        <div className="new-post-block">
          <div className="new-post-input-area">
            <textarea
              className="post-textarea"
              onChange={onPostChange}
              value={props.newPostText}
            ></textarea>
            <button className="new-post-button" onClick={addPostButtonClick}>
              New Post
            </button>
          </div>
          <div className="attach-block">
            <div className="attach-photo">
              <img src={attachPhoto} alt="attach photo" />
            </div>
            <div className="attach-file">
              <img src={attachFile} alt="attach file" />
            </div>
            <div className="attach-music">
              <img src={attachMusic} alt="attach music" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
