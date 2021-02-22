import React from 'react';
import './post.css';

const Post = (props) => {
  return (
    <>
      <div className="all-posts-block">
        <div>
          {props.message}
        </div>
      </div>
    </>
  )
}

export default Post;