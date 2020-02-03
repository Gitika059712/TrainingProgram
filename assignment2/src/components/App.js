import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import AppHeader from "./AppHeader";
import Posts from "./Posts";
import NotFound from "./NotFound";
import Comments from "./Comments";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: [],
      userPosts: [],
      userComments: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(res =>
      res
        .json()
        .then(data => {
          this.setState({ userInfo: data });
        })
        .catch()
    );
    fetch("https://jsonplaceholder.typicode.com/posts").then(res =>
      res
        .json()
        .then(data => {
          this.setState({ userPosts: data });
        })
        .catch()
    );
    fetch("https://jsonplaceholder.typicode.com/comments").then(res =>
      res
        .json()
        .then(data => {
          this.setState({ userComments: data });
        })
        .catch()
    );
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="active">
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/posts" activeClassName="active">
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink to="/comments" activeClassName="active">
                  Comments
                </NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <AppHeader userinfo={this.state.userInfo} />
            </Route>
            <Route path="/posts">
              <Posts userposts={this.state.userPosts} />
            </Route>
            <Route path="/comments">
              <Comments usercomments={this.state.userComments} />
            </Route>

            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
