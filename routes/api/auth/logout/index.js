var express = require("express");
var router = express.Router();
var session = require("express-session");

const app = express();

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

router.post("/", (req, res) => {
  //clear session
  console.log(req.session);
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.status(400).send("Unable to log out");
      } else {
        res.send("Logout successful");
      }
    });
  } else {
    res.status(500).json({
      message: "session unavailable",
    });
  }
});

module.exports = router;
