var express = require("express");
var router = express.Router();

//get by id category
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const menu = await Menu.findOne(id);

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
    const updatedMenu = await Menu.findByIdAndUpdate(id, newMenu);

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
module.exports = router;
