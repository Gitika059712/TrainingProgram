import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";

const HotelList = props => {
  return (
    <MDBContainer fluid>
      <br />

      <span>
        <Link to={"/api/hoteldata/" + props._id}>
          <Card variant="outlined">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Hotel1"
                image={"data:image/jpeg;base64" + props.hotelimage}
                title="Hotel1"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.hotelname}
                </Typography>

                <Typography variant="h6" color="inherit" component="p">
                  <span>{props.hotelcontact}</span>
                  <br />
                  <span>{props.hotelemail}</span>
                  <br />
                  <span>{props.hotelcity}</span>
                  <br />
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </span>
    </MDBContainer>
  );
};
export default HotelList;
