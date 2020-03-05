import React, { Component } from "react";
import axios from "axios";
import Signup from "./Signup";

export default class SignUpMethod extends Component {
  state = {
    error: "",
    open: false
  };
  handleSignup = user => {
    user = { ...user, image: localStorage.getItem("image") };

    axios
      .post(`http://localhost:3001/api/users`, { user })
      .then(res => {
        if (res.error) {
          this.setState({ error: res.data.error });
        } else {
          this.setState({ error: "", open: true });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Signup formState={this.state} onSubmit={this.handleSignup} />
      </div>
    );
  }
}
