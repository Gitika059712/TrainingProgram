import React from "react";
import "./posts.css";

export const Posts = ({ userposts }) => {
  return (
    <div>
      <center>
        <h1>Posts</h1>
      </center>
      {userposts.map(posts => (
        <div className="card" key={posts.id}>
          <div className="card-body">
            <h5 className="card-title">{posts.userId}</h5>
            <h6 className="card-subtitle mb-2 text-muted ">
              <span className="span">Title- </span>{" "}
              <span className="subspan">{posts.title}</span>
            </h6>
            <p className="card-text">
              <span className="light">Post- </span>
              <span className="subspan">{posts.body}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Posts;
