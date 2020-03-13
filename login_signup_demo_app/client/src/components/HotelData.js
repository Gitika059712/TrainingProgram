import React from "react";

import { Card, CardMedia, withStyles, Typography } from "@material-ui/core";

const styles = () => ({
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  overlay: {
    position: "absolute",
    top: "550px",
    left: "575px",
    color: "black",
    background: "transparent"
  },
  card: {
    position: "relative"
  }
});
const HotelData = props => {
  const { classes } = props;
  console.log(props.data);
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.data.hotelimages}
          title="Hotels"
        />
        <div className={classes.overlay}>
          <Typography variant="h2" gutterBottom>
            {props.data.hotelname}
          </Typography>
        </div>
      </Card>
      <br />
      <Typography variant="h2" align="center" gutterBottom>
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
          {props.data.hotelgalleryimages.map(imgs => (
            <img
              style={{ border: "1px solid black" }}
              className="d-block  "
              src={imgs}
              alt="First slide"
              width="200px"
              height="200px"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(HotelData);
