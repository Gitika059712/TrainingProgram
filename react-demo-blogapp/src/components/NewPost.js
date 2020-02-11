import React, { Component } from "react";

export default class NewPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      npost: {
        title: "",
        body: ""
      }
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        this.props.onUpdate({ json });
        console.log(json);
      });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Title: </label>
        <br />
        <input
          type="text"
          name="title"
          onChange={this.onChange}
          value={this.state.title}
        ></input>
        <br />
        <br />
        <label>Body: </label>
        <br />
        <textarea
          name="body"
          onChange={this.onChange}
          value={this.state.body}
        ></textarea>
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        <div>{this.state.npost.title}</div>
        <div>{this.state.npost.body}</div>
      </form>
    );
  }
}
