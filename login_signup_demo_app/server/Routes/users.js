var express = require("express");
var router = express.Router();
var userController = require("../controllers/userController");
var userAuth = require("../controllers/auth");

router.post("/api/users", userController.signup);

router
  .route("/api/users/:userId")
  .get(userAuth.requireSignin, userController.findUserProfile)
  .delete(
    userAuth.requireSignin,
    userAuth.hasAuthorization,
    userController.deleteUser
  );
router.param("userId", userController.findUserById);
module.exports = router;
