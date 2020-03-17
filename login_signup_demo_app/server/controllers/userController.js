const User = require("../models/user");

const getErrorMessage = require("../helpers/dbErrorHandler");

const signup = (req, res, next) => {
  const user = new User(req.body.user);

  user.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: getErrorMessage.getErrorMessage(err)
      });
    }
    res.status(200).json({
      message: "New user registered successfully!"
    });
  });
};

const findUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user found with that credentials!"
      });
    }

    req.profile = user;
    next();
  });
};

const findUserProfile = (req, res) => {
  req.profile.hashedPassword = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

const findAllUsers = (req, res) => {
  User.find({}).then(each => {
    res.json(each);
  });
};

const deleteUser = (req, res) => {
  let user = req.profile;
  User.deleteOne({ _id: req.profile._id }, (err, deletedUser) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      });
    }
    deletedUser.hashedPassword = undefined;
    user.salt = undefined;
    res.json({ user, message: "user deleted", deletedUser });
  });
};

exports.deleteUser = deleteUser;
exports.findAllUsers = findAllUsers;
exports.signup = signup;
exports.findUserById = findUserById;
exports.findUserProfile = findUserProfile;
