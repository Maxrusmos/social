import React from "react";
import "./createPost.css";
import attachPhoto from "./../../../../res/attachPhoto.png";
import attachFile from "./../../../../res/attachFile.png";
import attachMusic from "./../../../../res/attachMusic.png";

const CreatePost = (props) => {
  let newPostElement = React.createRef();

  let addPostButtonClick = () => {
    props.dispatch({type: 'ADD-POST'});
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
    props.dispatch(action);
  }

  return (
    <>
      <div className="posts">
        <h2>Create Post</h2>
        <div className="new-post-block">
          <div className="new-post-input-area">
            <textarea
              className="post-textarea"
              name="post-textarea"
              cols="30"
              rows="10"
              ref={newPostElement}
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
