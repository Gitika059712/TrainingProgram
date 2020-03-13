import React, { useState, useEffect } from "react";
import { fetchHotelData } from "./apiHelper/profileHelper";
import HotelData from "./HotelData";

const HotelDescription = () => {
  const [hoteluserdata, setHotelUserData] = useState([]);

  useEffect(() => {
    fetchHotelData().then(hoteldata => {
      setHotelUserData(hoteldata);
    });
  }, []);

  return (
    <div>
      {hoteluserdata.map(data => (
        <HotelData data={data} />
      ))}
    </div>
  );
};
export default HotelDescription;
