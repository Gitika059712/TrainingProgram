const Hotel = require("../models/hotels");
const getErrorMessage = require("../helpers/dbErrorHandler");
const hotelRegistration = (req, res, next) => {
  console.log(req.body);
  const hotel = new Hotel(req.body.hotel);

  hotel.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: getErrorMessage.getErrorMessage(err)
      });
    }
    res.status(200).json({
      message: "Hotel registered successfully!"
    });
  });
};
exports.hotelRegistration = hotelRegistration;
