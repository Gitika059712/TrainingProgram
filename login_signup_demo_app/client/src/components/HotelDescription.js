import React, { useState, useEffect } from "react";
import { findHotelManagerProfile } from "./apiHelper/profileHelper";
import HotelData from "./HotelData";

const HotelDescription = props => {
  const [hoteluserdata, setHotelUserData] = useState("");

  const init = _id => {
    findHotelManagerProfile({
      _id: _id
    }).then(data => {
      if (data.error) {
        console.log("error");
      } else {
        setHotelUserData(data);
      }
    });
  };
  useEffect(() => {
    init(props.match.params._id);
  }, [props.match.params._id]);

  return (
    <div>
      <HotelData data={hoteluserdata} />
    </div>
  );
};
export default HotelDescription;
