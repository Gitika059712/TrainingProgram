var config = require("./config/index");
var express = require("express");
const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./Routes/users");
const authRoutes = require("./Routes/auth");
const dbConnection = require("./config/dbConnection");

var app = express();
app.use(cors());

app.use(cookieParser());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/", userRoutes);
app.use("/", authRoutes);

var server = app.listen(config.port, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
