var express = require("express");
var router = express.Router();
var User = require("../../../schema/user-schema.js");

/* GET all users listing. */
router.get("/users", async (req, res) => {
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

// get user based on id
router.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);

    res.status(200).json({
      message: "User available",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Data Unavailable",
      data: error,
    });
  }
});

// Modify user based on id
router.put("/user/:id", async (req, res) => {
  const { id } = req.params;
  const user = req.body;

  try {
    const userUpdate = await User.updateOne({ _id: id }, user);
    res.status(200).json({
      message: "Update Success",
      data: userUpdate,
    });
  } catch (error) {
    res.status(400).json({
      message: "cant update",
      error: error,
    });
  }
});

// Delete user based on id
router.delete("/user/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleteUser = await User.findByIdAndDelete({ _id: id });

    res.status(200).json({
      message: "Delete success",
      data: deleteUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Delete fail",
      error: error,
    });
  }
});

module.exports = router;
