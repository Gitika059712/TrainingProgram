import React from "react";
import "./postlist.css";

export default function PostList({ list1 }) {
  return (
    <div>
      <h1>Post List</h1>
      {list1.map(listl => (
        <div className="list-title">
          <ul>
            <li key="listl.id">{listl.title}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
