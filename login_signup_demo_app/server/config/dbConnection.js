const config = require("./index");
var mongoose = require("mongoose");

const URI = config.mongoURI;

mongoose.connect(URI, { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", err => {});
db.on("connected", (err, res) => {});
db.once("open", function() {});
