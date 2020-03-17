import React, { useState, useEffect } from "react";

import {
  findHotelManagerProfile,
  deleteHotelData
} from "./apiHelper/profileHelper";
import { CardMedia, withStyles, Typography, Button } from "@material-ui/core";

const styles = () => ({
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  overlay: {
    position: "absolute",
    top: "550px",
    left: "540px",
    color: "black",
    background: "transparent"
  },
  card: {
    position: "relative"
  }
});
const HotelManagerDashboard = props => {
  const { classes } = props;
  var _id = localStorage.getItem("userId");
  const [hoteluserdata, setHotelUserData] = useState("");

  useEffect(() => {
    findHotelManagerProfile({
      _id: _id
    }).then(data => {
      if (data.error) {
        alert("your hotel is not registered yet");
        props.history.push("/hotelregistration");
      } else {
        setHotelUserData(data);
      }
    });
  }, [_id, props.history]);

  const handleClick = () => {
    deleteHotelData({ _id: hoteluserdata._id }).then(data => {
      if (data.error) {
        console.log("Error");
      } else {
        alert("Hotel deleted successfully");
        props.history.push("/hotelregistration");
      }
    });
  };
  if (hoteluserdata.hotelgalleryimages === undefined) {
    console.log("error");
  } else {
    var imgs = hoteluserdata.hotelgalleryimages.map(item => (
      <img
        style={{ border: "1px solid black" }}
        className="d-block "
        src={item}
        alt="First slide"
        width="200px"
        height="200px"
      />
    ));
  }

  return (
    <div>
      <div>
        <CardMedia
          className={classes.media}
          image={hoteluserdata.hotelimages}
          title="Hotels"
        />
      </div>
      <br />
      <div>
        <Typography variant="h4" align="center" gutterBottom>
          Your Images
        </Typography>
      </div>
      <div
        style={{
          textAlign: "center"
        }}
      >
        <div
          style={{
            display: "inline-flex",
            border: "2px solid black",
            margin: "20px"
          }}
        >
          {imgs}
        </div>
      </div>
      <div>
        <Typography variant="h5" align="center" gutterBottom>
          Show options
        </Typography>
      </div>
      <div>
        <Button
          style={{ marginLeft: "450px" }}
          variant="outlined"
          onClick={handleClick}
        >
          Delete Data
        </Button>
      </div>
    </div>
  );
};
export default withStyles(styles)(HotelManagerDashboard);
