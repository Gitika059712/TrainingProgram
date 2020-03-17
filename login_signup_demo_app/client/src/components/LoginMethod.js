import React, { Component } from "react";
import axios from "axios";
import auth from "./authHelper";
import Login from "./Login";

export default class LoginMethod extends Component {
  state = {
    error: "",
    redirectToReferrer: false
  };

  handleLogin = user => {
    axios
      .post(`http://localhost:3001/auth/login`, { user })
      .then(res => {
        var id = res.data.user._id;

        localStorage.setItem("id", id);

        if (res.error) {
          this.props.history.push("/signin");
        } else {
          auth.authenticate(res.data, () => {
            localStorage.setItem("userId", res.data.user._id);
            localStorage.setItem("userrole", res.data.user.role);
            this.props.history.push("/dashboard");
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Login formState={this.state} onSubmit={this.handleLogin} />
      </div>
    );
  }
}
