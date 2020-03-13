const Hotel = require("../models/hotels");
const getErrorMessage = require("../helpers/dbErrorHandler");
const hotelRegistration = (req, res, next) => {
  const hotel = new Hotel({
    _id: req.body.hotel.id,
    hotelimages: req.body.hotel.image,
    hotelgalleryimages: req.body.hotel.gallery,
    hotelname: req.body.hotel.hotelname,
    hotelcontact: req.body.hotel.hotelcontact,
    hotelemail: req.body.hotel.hotelemail,
    hotelwebsite: req.body.hotel.hotelwebsite,
    hoteladdress: {
      haddress: req.body.hotel.haddress,
      hotelcity: req.body.hotel.hotelcity,
      hotelstate: req.body.hotel.hotelstate,
      hotelpincode: req.body.hotel.pincode,
      geo: {
        lat: req.body.hotel.lat,
        lng: req.body.hotel.lng
      }
    }
  });

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
const getHotelData = (req, res) => {
  Hotel.find({}).then(each => {
    res.json(each);
  });
};
exports.getHotelData = getHotelData;
exports.hotelRegistration = hotelRegistration;
