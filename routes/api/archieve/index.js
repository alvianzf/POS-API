var express = require("express");
var router = express.Router();
var Menu = require("../../../schema/menu-schema.js");

//get all menus archieve
router.get("/menu", async (req, res) => {
  try {
    const menus = await Menu.find({ is_active: false });

    res.status(200).json({
      message: "Retrieve User Successfull",
      data: menus,
    });
  } catch (error) {
    res.status(500).json({
      message: "data unavailable",
      error: error,
    });
  }
});
