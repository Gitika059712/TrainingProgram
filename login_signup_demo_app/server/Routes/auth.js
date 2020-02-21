var express = require("express");
var authController = require("../controllers/auth");

const router = express.Router();
router.post("/auth/login", authController.login);
router.get("/auth/signout", authController.signout);

module.exports = router;
