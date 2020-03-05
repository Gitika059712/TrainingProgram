import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import PrivateRoutes from "./PrivateRoute";
import SignUpMethod from "./components/SignUpMethod";
import LoginMethod from "./components/LoginMethod";
import WebsiteHome from "./components/WebsiteHome";
import HotelRegistrationMethod from "./components/HotelRegistrationMethod";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={WebsiteHome} />

        <Route path="/home" component={Home} />
        <PrivateRoutes path="/user/edit/:userId" />
        <Route path="/users/:userId" component={Profile} />
        <Route
          exact
          path="/hotelregistration"
          component={HotelRegistrationMethod}
        />
        <Route path="/signup" component={SignUpMethod} />
        <Route path="/signin" component={LoginMethod} />
      </Switch>
    </div>
  );
};

export default Routes;
