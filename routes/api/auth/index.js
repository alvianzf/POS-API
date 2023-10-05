var express = require("express");
var router = express.Router();

// User API endpoints
router.use("/login", require("./login"));
router.use("/logout", require("./logout"));

module.exports = router;
