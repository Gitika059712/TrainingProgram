import React, { useEffect, useState } from "react";
import HotelList from "./HotelList";
import Typography from "@material-ui/core/Typography";
import { fetchHotelData } from "./apiHelper/profileHelper";
import GoogleMap from "./GoogleMap";
import Grid from "@material-ui/core/Grid";

const CustomerDashboard = () => {
  const [hoteluserdata, setHotelUserData] = useState([]);
  useEffect(() => {
    fetchHotelData().then(hoteldata => {
      setHotelUserData(hoteldata);
    });
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Hotel List
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={4}>
          {hoteluserdata.map(hotelUser => (
            <HotelList
              key={hotelUser._id}
              _id={hotelUser._id}
              hotelname={hotelUser.hotelname}
              hotelcontact={hotelUser.hotelcontact}
              hotelemail={hotelUser.hotelemail}
              hotelcity={hotelUser.hoteladdress.hotelcity}
              hotelimage={hotelUser.hotelimages}
              lat={hotelUser.hoteladdress.geo.lat}
              lng={hotelUser.hoteladdress.geo.lng}
            />
          ))}
        </Grid>
        <Grid item xs={8} style={{ position: "relative" }}>
          <GoogleMap data={hoteluserdata} />
        </Grid>
      </Grid>
    </div>
  );
};
export default CustomerDashboard;
