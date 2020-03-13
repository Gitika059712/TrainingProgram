import React, { useEffect, useState } from "react";
import HotelList from "./HotelList";
import Typography from "@material-ui/core/Typography";
import { fetchHotelData } from "./apiHelper/profileHelper";
import GoogleMap from "./GoogleMap";
import "./customerDashboard.css";

const CustomerDashboard = () => {
  const [hoteluserdata, setHotelUserData] = useState([]);
  useEffect(() => {
    fetchHotelData().then(hoteldata => {
      setHotelUserData(hoteldata);
    });
  }, []);
  console.log(hoteluserdata);
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Hotel List
      </Typography>
      <div className="row">
        <div class="column column1">
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
        </div>
        <div class="column map">
          <GoogleMap data={hoteluserdata} />
        </div>
      </div>
    </div>
  );
};
export default CustomerDashboard;
