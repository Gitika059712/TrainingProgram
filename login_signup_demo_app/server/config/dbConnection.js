const config = require("./index");
var mongoose = require("mongoose");

const URI = config.mongoURI;

mongoose.connect(URI, { useNewUrlParser: true });
console.log("db created");
var db = mongoose.connection;
db.on("error", err => {
  console.log("connection error:" + err);
});
db.on("connected", (err, res) => {
  console.log("mongoose is connected");
});
db.once("open", function() {
  // we're connected!
  console.log("connection established");
});
