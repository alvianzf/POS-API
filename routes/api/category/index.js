var express = require("express");
var router = express.Router();
var Category = require("../../../schema/category-schema.js");

//get by id category
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const menu = await Category.findOne(id);

    res.status(200).json({
      message: "Success",
      data: menu,
    });
  } catch (error) {
    res.status(400).json({
      message: "incorrect id",
      error: error,
    });
  }
});

//update by id
router.put("/:id", async (req, res) => {
  const { id } = req.params;

  const newMenu = req.body;

  try {
    const updatedMenu = await Category.findByIdAndUpdate(id, newMenu);

    res.status(200).json({
      message: "update success",
      data: newMenu,
    });
  } catch (error) {
    res.status(400).json({
      message: "error updating",
      error: error,
    });
  }
});

//delete by id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMenu = await Category.findByIdAndDelete({ _id: id });

    res.status(200).json({
      message: "delete success",
      data: deletedMenu,
    });
  } catch (error) {
    res.status(400).json({
      message: "id unavailable",
      error: error,
    });
  }
});

module.exports = router;
