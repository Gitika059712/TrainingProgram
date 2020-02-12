import React from "react";
import "./postdetail.css";
import { connect } from "react-redux";

function PostDetail(props) {
  const postdetail = props.posts;

  return (
    <div>
      <h1>Post Detail</h1>
      {postdetail.map(detaild => (
        <div key="listl.id">
          <ul>
            <li key={detaild.id}>
              <div>
                <span className="label">Title - </span>
                {detaild.title}
              </div>
              <div>
                <span className="label">Body - </span>
                {detaild.body}
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(PostDetail);
