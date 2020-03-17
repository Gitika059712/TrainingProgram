import React from "react";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  var loggedInUser = localStorage.getItem("userrole");

  if (loggedInUser === "hotelmanager") {
    return <Redirect to="/hotelmanagerdashboard" />;
  } else {
    return <Redirect to="/customerdashboard" />;
  }
};

export default Dashboard;
