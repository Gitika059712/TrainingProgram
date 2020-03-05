var express = require("express");
var router = express.Router();
var userController = require("../controllers/userController");
var userAuth = require("../controllers/auth");
var hotelRegistration = require("../controllers/hotelRegistrationController");
router.post("/api/users", userController.signup);

router
  .route("/api/users/:userId")
  .get(userAuth.requireSignin, userController.findUserProfile);

router.param("userId", userController.findUserById);
router.post(
  "/api/users/hotelRegistration",
  hotelRegistration.hotelRegistration
);
module.exports = router;
