import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Home from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import auth from "./authHelper";
import { Link, withRouter } from "react-router-dom";
import { transparent } from "material-ui/styles/colors";

const Menu = withRouter(({ history }) => (
  <AppBar
    position="static"
    style={{
      backgroundColor: transparent,
      position: "absolute",
      boxShadow: "none",
      color: "black"
    }}
  >
    <Toolbar>
      <Typography type="title">Hotel Registration and Booking App</Typography>

      {!auth.isAuthenticated() && (
        <span>
          <Link to="/">
            <IconButton aria-label="Home" style={{ marginLeft: "700px" }}>
              <Home />
            </IconButton>
          </Link>

          <Link to="/signup" style={{ marginLeft: "25px" }}>
            <Button>Sign up</Button>
          </Link>

          <Link to="/signin" style={{ marginLeft: "25px" }}>
            <Button>Log In</Button>
          </Link>
        </span>
      )}

      {auth.isAuthenticated() && (
        <span>
          <span style={{ marginLeft: "600px" }}>
            {!auth.isHotelManager() && (
              <Link to={"/customerdashboard"}>
                <Button>Dashboard</Button>
              </Link>
            )}
          </span>

          {auth.isHotelManager() && (
            <span>
              <Link
                to={"/hotelmanagerdashboard"}
                style={{ marginLeft: "-150px" }}
              >
                <Button>Dashboard</Button>
              </Link>
              <Link to={"/hotelregistration"} style={{ marginLeft: "25px" }}>
                <Button>Hotel Registration</Button>
              </Link>
            </span>
          )}
          <Link
            to={"/users/" + auth.isAuthenticated().user._id}
            style={{ marginLeft: "25px" }}
          >
            <Button>My Profile</Button>
          </Link>
          <Button
            style={{ marginLeft: "25px" }}
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
