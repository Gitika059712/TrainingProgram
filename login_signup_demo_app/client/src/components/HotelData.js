import React from "react";
import { Card, CardMedia, withStyles, Typography } from "@material-ui/core";
import Rating from "./Rating";

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

const HotelData = props => {
  const { classes } = props;

  if (props.data.hotelgalleryimages === undefined) {
    console.log("error");
  } else {
    var imgs = props.data.hotelgalleryimages.map(item => (
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
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.data.hotelimages}
          title="Hotels"
        />
        <div className={classes.overlay}>
          <Typography
            variant="h2"
            gutterBottom
            style={{ fontFamily: "italic" }}
          >
            {props.data.hotelname}
          </Typography>
        </div>
      </Card>
      <br />
      <br />
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        style={{ fontFamily: "italic" }}
      >
        Welcome to
      </Typography>
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        style={{ fontFamily: "italic" }}
      >
        {props.data.hotelname}
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        gutterBottom
        style={{ fontSize: "20px", fontFamily: "italic" }}
      >
        {props.data.hoteldescription}
      </Typography>

      <br />
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        style={{ fontFamily: "italic" }}
      >
        Gallery
      </Typography>
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
        <br />
        <Typography variant="subtitle2" gutterBottom>
          Give Rating
        </Typography>
        <br />
        <Rating />
      </div>
    </div>
  );
};
export default withStyles(styles)(HotelData);
