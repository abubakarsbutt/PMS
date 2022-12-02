import mongoose from "mongoose";

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
  status: {
    type: String,
    enum: ["ACTIVE", "CLOSED"],
    default: "ACTIVE",
  },
  lastLogin: {
    type: Date,
    // default: new Date(),
    default: Date.now(),
  },
  settings: {
    type: String,
    default: "...",
  },
  image: String,
});

export default mongoose.model("users", userModel);
