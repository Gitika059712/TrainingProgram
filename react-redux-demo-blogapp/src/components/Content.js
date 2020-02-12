import React from "react";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import NewPost from "./NewPost";
import "./content.css";

function Content(props) {
  let cd;

  if (props.postlistbtn) {
    cd = <PostList />;
  } else if (props.postdetailbtn) {
    cd = <PostDetail />;
  } else if (props.newpostbtn) {
    cd = <NewPost onUpdate={props.newPostadd} />;
  }
  return (
    <div>
      <div className="btn-div">
        <button onClick={props.postlist} className="btn btn-list">
          Post List
        </button>
        <button onClick={props.postdetail} className="btn btn-details">
          Post Details
        </button>
        <button onClick={props.newpost} className="btn btn-newpost">
          New Post
        </button>
      </div>
      <br />
      <br />
      <div>{cd}</div>
    </div>
  );
}

export default Content;
