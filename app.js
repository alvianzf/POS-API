var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var dbConnection = require("./middleware/dbConnection-middleware");

var app = express();
app.use(dbConnection);

// view engine setup
app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", require("./routes"));

app.listen(3000, () => {
  console.log(`====server run====`);
});

module.exports = app;
