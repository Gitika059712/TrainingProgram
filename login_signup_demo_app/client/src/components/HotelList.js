import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";
import Geocode from "react-geocode";

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyDmPD51nNmrUZZzQTWoYjWKxLjdAkR5z3E");

// set response language. Defaults to english.
Geocode.setLanguage("en");

// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("es");

// Enable or disable logs. Its optional.
Geocode.enableDebug();

const HotelList = props => {
  console.log(props);

  const handle = () => {
    Geocode.fromAddress("Indore").then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      error => {
        console.error(error);
      }
    );
  };
  return (
    <MDBContainer fluid>
      <br />

      <span>
        <Link to={props._id}>
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
            <button onClick={handle}>click</button>
          </Card>
        </Link>
      </span>
    </MDBContainer>
  );
};
export default HotelList;
