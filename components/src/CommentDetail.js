import React from 'react';

// take in properties passed through parent
const CommentDetail = props => {
  // console.log(props); // properties organized in key value pairs 
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" />
        {/* <img alt="avatar" src={props.avatar} /> */}
      </a>
      <div className="content">
        <a href="/" className="author">{props.author}</a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail; // exports component and makes it available to the rest of the project