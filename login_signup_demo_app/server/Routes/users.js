var express = require("express");
var router = express.Router();
var userController = require("../controllers/userController");
var userAuth = require("../controllers/auth");
var hotelRegistration = require("../controllers/hotelRegistrationController");

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

router
  .route("/api/hoteldata/:_id")
  .get(hotelRegistration.findHotelManagerById)
  .delete(hotelRegistration.deleteHotelData);

router.param("_id", hotelRegistration.findHotelManagerById);

module.exports = router;
