import React from "react";
import "./postlist.css";
import { connect } from "react-redux";

function PostList(props) {
  const postData = props.posts;

  return (
    <div>
      <h1>Post List</h1>
      <div className="list-title">
        <ul>
          {postData.map(listData => (
            <li key={listData.id}> {listData.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(PostList);
