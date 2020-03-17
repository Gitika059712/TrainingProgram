import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import SignUpMethod from "./components/SignUpMethod";
import LoginMethod from "./components/LoginMethod";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import HotelRegistrationMethod from "./components/HotelRegistrationMethod";
import HotelManagerDashboard from "./components/HotelManagerDashboard";
import CustomerDashboard from "./components/CustomerDashboard";
import HotelDescription from "./components/HotelDescription";

const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        />
        <Route exact path="/" component={Home} />
        <Route path="/users/:userId" component={Profile} />
        <Route
          exact
          path="/hotelregistration"
          component={HotelRegistrationMethod}
        />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={SignUpMethod} />
        <Route path="/signin" component={LoginMethod} />
        <Route
          path="/hotelmanagerdashboard"
          component={HotelManagerDashboard}
        />
        <Route path="/customerdashboard" component={CustomerDashboard} />
        <Route path="/api/hoteldata/:_id" component={HotelDescription} />
      </Switch>
    </div>
  );
};

export default Routes;
