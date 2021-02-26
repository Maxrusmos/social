import React from "react";
import "./post.css";
import like from "./../../../../res/like.png";
import comment from "./../../../../res/comment.png";

const Post = (props) => {
  return (
    <>
      <div className="all-posts-block">
        <div className="post">
          <div className="accountPicture-date-block">
            <img className="accountPicture-img" src={props.profilePhotoUrl} />
            <div className="name-date-block">
              <h3>Воробьев Максим</h3>
              <p>12.11.1999</p>
            </div>
          </div>
          <div className="post-textBlock">{props.message}</div>
          <hr />
          <div className="likes-comment-block">
            <div className="likes-block">
              <img className="likePicture-img" src={like} />
              <span>{props.likesCount}</span>
            </div>
            <div className="comment-block">
              <img className="commentPicture-img" src={comment} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
