var mongoose = require("mongoose");

const crypto = require("crypto");
var Schema = mongoose.Schema;
var userSchema = new Schema({
  firstname: {
    type: String,
    required: "User First name is required",
    trim: true
  },
  lastname: {
    type: String,
    required: "User Last name is required",
    trim: true
  },
  address: { type: String, required: "Address is required", trim: true },

  contact: {
    type: Number,
    trim: true,
    required: "User contact number is required"
  },
  role: {
    type: String,
    required: "Role is required"
  },
  email: {
    type: String,
    required: "Email is required",
    unique: "Email already exists",
    match: [/.+\@.+\..+/, "Please fill a valid email"],
    trim: true
  },
  image: {
    type: String
  },
  hashedPassword: {
    type: String,
    required: "Password is required"
  },

  salt: {
    type: String
  }
});

userSchema
  .virtual("password")
  .set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashedPassword = this.encryptedPassword(password);
  })
  .get(function() {
    return this._password;
  });

userSchema.methods = {
  authenticate: function(plainText) {
    return this.encryptedPassword(plainText) === this.hashedPassword;
  },
  encryptedPassword: function(password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
  makeSalt: function() {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  }
};
userSchema.path("hashedPassword").validate(function(v) {
  if (this.hashedPassword && this._password.length < 6) {
    this.invalidate("password", "Password must be at least 6 characters long.");
  }
  if (this.isNew && !this._password) {
    this.invalidate("password", "Password is required.");
  }
}, null);

var User = mongoose.model("User", userSchema);
module.exports = User;
