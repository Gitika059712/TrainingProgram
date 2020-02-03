import React from "react";
import "./comments.css";

export const Comments = ({ usercomments }) => {
  return (
    <div>
      <center>
        <h1>Comments</h1>
      </center>
      {usercomments.map(comment => (
        <div className="card" key={comment.id}>
          <div className="card-body">
            <h5 className="card-title">{comment.postId}</h5>
            <h6 className="card-subtitle mb-2 text-muted ">
              <span className="span">Title- </span>
              <span className="subspan">{comment.name}</span>
            </h6>
            <p className="card-text">
              <span className="light">Email- </span>
              <span className="subspan">{comment.email}</span>
            </p>
            <p className="card-text">
              <span className="light">Comment- </span>
              <span className="subspan">{comment.body}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Comments;
