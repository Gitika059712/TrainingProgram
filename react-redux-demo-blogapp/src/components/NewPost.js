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

    const post = [
      {
        title: this.state.title,
        body: this.state.body
      }
    ];

    this.props.onUpdate(post);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Title: </label>
          <br />
          <input type="text" name="title" onChange={this.onChange}></input>
          <br />
          <br />
          <label>Body: </label>
          <br />
          <textarea name="body" onChange={this.onChange}></textarea>
          <br />
          <br />
          <button type="submit">Submit</button>
          <br />
          <br />
        </form>
      </div>
    );
  }
}
