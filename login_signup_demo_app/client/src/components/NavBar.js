import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Home from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import auth from "./authHelper";
import { Link, withRouter } from "react-router-dom";

const isActive = (history, path) => {
  if (history.location.pathname === path) return { color: "#F44336" };
  else return { color: "#ffffff" };
};

const Menu = withRouter(({ history }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography type="title" color="initial">
        Login-Signup-Demo-App
      </Typography>
      <Link to="/">
        <IconButton
          aria-label="Home"
          style={{
            color: "white"
          }}
        >
          <Home />
        </IconButton>
      </Link>

      {!auth.isAuthenticated() && (
        <span>
          <Link to="/signup">
            <Button
              style={{
                color: "white"
              }}
            >
              Sign up
            </Button>
          </Link>
          <Link to="/signin">
            <Button
              style={{
                color: "white"
              }}
            >
              Log In
            </Button>
          </Link>
        </span>
      )}

      {auth.isAuthenticated() && (
        <span>
          <Link to={"/users/" + auth.isAuthenticated().user._id}>
            <Button
              style={{
                color: "white"
              }}
            >
              My Profile
            </Button>
          </Link>
          <Link to={"/hotelregistration"}>
            <Button
              style={{
                color: "white"
              }}
            >
              Hotel Registration
            </Button>
          </Link>
          <Button
            color="inherit"
            onClick={() => {
              auth.signout(() => history.push("/"));
            }}
          >
            Sign out
          </Button>
        </span>
      )}
    </Toolbar>
  </AppBar>
));
export default Menu;
