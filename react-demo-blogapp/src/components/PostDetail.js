import React from "react";

export default function PostDetail({ detail1 }) {
  return (
    <div>
      <h1>Post Detail</h1>
      {detail1.map(detaild => (
        <div>
          <ul>
            <li key="listl.id">
              <div>{detaild.title}</div>
              <div> {detaild.body}</div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
