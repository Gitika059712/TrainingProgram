const config = require("../config/index");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

const login = (req, res) => {
  User.findOne({ email: req.body.user.email }, (err, user) => {
    if (err || !user) {
      return res.status(401).json({
        error: "User not found"
      });
    }
    if (!user.authenticate(req.body.user.password)) {
      return res.status(401).json({
        error: "Wrong Email or Password!"
      });
    }
    const token = jwt.sign(
      {
        _id: user._id
      },
      config.jwtSecret
    );
    res.cookie("t", token, {
      expire: new Date() + 9999
    });
    return res.json({
      token,
      user: {
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        address: user.address,
        contact: user.contact,
        email: user.email,
        image: user.image,
        role: user.role
      }
    });
  });
};

const signout = (req, res) => {
  res.clearCookie("t");
  return res.status(200).json({
    message: "Sign out successful!"
  });
};
const requireSignin = expressJwt({
  secret: config.jwtSecret,
  userProperty: "auth"
});
const hasAuthorization = (req, res) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!authorized) {
    return res.status(403).json({
      error: "User is not authorized!"
    });
  }
};
exports.login = login;
exports.signout = signout;
exports.requireSignin = requireSignin;
exports.hasAuthorization = hasAuthorization;
