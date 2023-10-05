const router = require("express").Router();

const passport = require("../../services/passport-jwt.js");

router.get("/", function (req, res) {
  return res.status(403).json({ data: "Please read documentation at ----" });
});

// Route Groups
router.use("/transaction", require("./transaction"));
router.use("/category", require("./category"));
router.use(
  "/user",
  passport.authenticate("jwt", { session: false }),
  require("./users")
);
router.use("/transaction", require("./transaction"));
router.use("/menu", require("./menu"));
router.use("/auth", require("./auth"));

//Route for getall
router.use("/users", require("../api/getAll/users.js"));
router.use("/categories", require("../api/getAll/categories.js"));
router.use("/menus", require("../api/getAll/menus.js"));

//Route for archieve
router.use("/archieve", require("../api/archieve"));

module.exports = router;
