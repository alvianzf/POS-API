var express = require("express");
var router = express.Router();
var User = require("../../../../schema/user-schema.js");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const privateKey = "secret";

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (isPasswordCorrect) {
      const token = jwt.sign(
        {
          username: user.username,
          id: user._id,
          role: user.role,
        },
        privateKey
      );

      res.status(200).json({
        message: "Login success",
        data: token,
      });
    } else {
      res.status(400).json({
        message: "Login Failed",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "username unavailable",
      error: error,
    });
  }
});

module.exports = router;
