var mongoose = require("mongoose");

const crypto = require("crypto");
const Schema = mongoose.Schema;
const hotelSchema = new Schema({
  _id: { type: String },
  hotelname: {
    type: String,
    required: "Hotel Name is required",
    trim: true,
    uppercase: true
  },
  hotelimages: {
    type: String
  },
  hotelgalleryimages: { type: Array },
  hotelemail: {
    type: String,
    trim: true,
    unique: "Email already exists",
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
    required: "Hotel Email is required"
  },
  hoteladdress: {
    haddress: {
      type: String,
      required: "Hotel address is required",
      trim: true
    },
    hotelcity: { type: String, required: "Hotel City is required", trim: true },
    hotelstate: {
      type: String,
      required: "Hotel State is required",
      trim: true
    },
    hotelpincode: { type: String, required: "pincode is required", trim: true },
    geo: {
      lat: { type: Number },
      lng: { type: Number }
    }
  },

  hotelcontact: {
    type: String,
    trim: true,
    required: "Hotel Contact is required",
    minLength: 6,
    maxLength: 12
  },
  hotelwebsite: { type: String, trim: true },
  hoteldescription: { type: String, trim: true }
});
var Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;
