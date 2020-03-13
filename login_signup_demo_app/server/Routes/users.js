var express = require("express");
var router = express.Router();
var userController = require("../controllers/userController");
var userAuth = require("../controllers/auth");
var hotelRegistration = require("../controllers/hotelRegistrationController");
const User = require("../models/user");
router.post("/api/users", userController.signup);

router
  .route("/api/users/:userId")
  .get(userAuth.requireSignin, userController.findUserProfile)
  .delete(userController.deleteUser);

router.param("userId", userController.findUserById);
router.post(
  "/api/users/hotelRegistration",
  hotelRegistration.hotelRegistration
);
router.get("/api/userdata", userController.findAllUsers);
router.get("/api/hoteldata", hotelRegistration.getHotelData);

module.exports = router;
