import React, { Component } from "react";
import axios from "axios";
import HotelRegistrationForm from "./HotelRegistrationForm";

export default class HotelRegistrationMethod extends Component {
  state = {
    error: "",
    open: false
  };
  hotelRegistrationMethod = hotel => {
    var g = JSON.parse(localStorage.getItem("gallery"));
    console.log(g);
    hotel = {
      ...hotel,
      image: localStorage.getItem("image"),
      gallery: JSON.parse(localStorage.getItem("gallery")),
      id: localStorage.getItem("id")
    };

    axios
      .post(`http://localhost:3001/api/users/hotelregistration`, { hotel })
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
        <HotelRegistrationForm
          formState={this.state}
          onSubmit={this.hotelRegistrationMethod}
        />
      </div>
    );
  }
}
