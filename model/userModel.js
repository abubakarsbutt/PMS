const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ["Admin", "User"],
    default: "User",
  },
  image: String,
});

module.exports = mongoose.model("users", userModel);
