import React, { Component } from "react";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import NewPost from "./NewPost";
import "./content.css";
export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postlist: false,
      postdetail: false,
      newpost: false,
      list: [],
      npost: []
    };
    this.onClickPostList = this.onClickPostList.bind(this);
    this.onClickPostDetail = this.onClickPostDetail.bind(this);
    this.onClickNewPost = this.onClickNewPost.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(post => {
        this.setState({ list: post });
      })
      .catch("error");
  }

  onClickPostList() {
    this.setState({
      postlist: true,
      postdetail: false,
      newpost: false
    });
  }
  onClickPostDetail() {
    this.setState({
      postlist: false,
      postdetail: true,
      newpost: false
    });
  }
  onClickNewPost() {
    this.setState({
      postlist: false,
      postdetail: false,
      newpost: true
    });
  }
  newPostUpdate = ({ json }) => {
    this.setState({ list: [...this.state.list, json] }, () => {
      console.log(this.state.npost);
    });
  };

  render() {
    let cd;
    if (this.state.postlist) {
      cd = <PostList list1={this.state.list} />;
    } else if (this.state.postdetail) {
      cd = <PostDetail detail1={this.state.list} />;
    } else if (this.state.newpost) {
      cd = <NewPost onUpdate={this.newPostUpdate} />;
    }

    return (
      <div>
        <div className="btn-div">
          <button onClick={this.onClickPostList} className="btn btn-list">
            Post List
          </button>
          <button onClick={this.onClickPostDetail} className="btn btn-details">
            Post Details
          </button>
          <button onClick={this.onClickNewPost} className="btn btn-newpost">
            New Post
          </button>
        </div>
        <br />
        <br />
        <div>{cd}</div>
      </div>
    );
  }
}
