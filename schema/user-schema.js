var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  user_email: String,
  password: String,
  role: {
    type: String,
    enum: {
      values: ["owner", "store_manager", "manager"],
    },
  },
  is_active: Boolean,
  timestamp: Date,
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
