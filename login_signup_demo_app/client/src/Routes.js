import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Navbar from "./components/NavBar";
import PrivateRoutes from "./PrivateRoute";
import Login from "./components/Login";
const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoutes path="/user/edit/:userId" />
        <Route path="/users/:userId" component={Profile} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Login} />
      </Switch>
    </div>
  );
};

export default Routes;
