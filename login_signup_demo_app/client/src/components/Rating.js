import ReactStars from "react-rating-stars-component";
import React, { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState("");
  const ratingChanged = newRating => {
    setRating(newRating);
  };

  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      half={true}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      color2={"#ffd700"}
      value={rating}
    />
  );
};
export default Rating;
