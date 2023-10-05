var express = require("express");
var router = express.Router();
var Category = require("../../../schema/category-schema.js");

//get all menus
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find({ is_active: true });

    res.status(200).json({
      message: "Retrieve User Successfull",
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      message: "data unavailable",
      error: error,
    });
  }
});
