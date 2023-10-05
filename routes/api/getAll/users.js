var express = require("express");
var router = express.Router();
var User = require("../../../schema/user-schema.js");

/* GET all users listing. */
router.get("/", async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json({
      message: "Retrieve User Successfull",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "data unavailable",
      error: error,
    });
  }
});

module.exports = router;
