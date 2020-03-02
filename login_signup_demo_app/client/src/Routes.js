import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Navbar from "./components/NavBar";
import PrivateRoutes from "./PrivateRoute";
import SignUpMethod from "./components/SignUpMethod";
import LoginMethod from "./components/LoginMethod";

const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoutes path="/user/edit/:userId" />
        <Route path="/users/:userId" component={Profile} />
        <Route path="/signup" component={SignUpMethod} />
        <Route path="/signin" component={LoginMethod} />
      </Switch>
    </div>
  );
};

export default Routes;
