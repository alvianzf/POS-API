var mongoose = require("mongoose");
var schema = mongoose.Schema;

//define category schema
const categorySchema = new Schema(
  {
    category_name: String,
    is_active: {
      type: Boolean,
      default: true,
    },
    image: String,
    created_by: {
      type: mongoose.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Categories", categorySchema);

module.exports = Category;
