const router = require("express").Router();
const passport = require("../../services/passport-jwt.js");

router.get("/", function (req, res) {
  return res.status(403).json({ data: "Please read documentation at ----" });
});

// Route Groups
router.use(
  "/user",
  passport.authenticate("jwt", { session: false }),
  require("./users")
);
router.use("/transaction", require("./transaction"));
router.use("/menu", require("./menu"));
router.use("/auth", require("./auth"));

router.use("/users", require("../api/getAll/users.js"));

module.exports = router;
