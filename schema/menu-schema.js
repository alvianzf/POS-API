var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const menuSchema = new Schema(
  {
    category_id: {
      type: mongoose.ObjectId,
      ref: "Category",
    },
    name: String,
    unit_price: Number,
    discount: Number,
    description: {
      text: String,
      image: String,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Menu = mongoose.model("Menus", menuSchema);

module.exports = Menu;
