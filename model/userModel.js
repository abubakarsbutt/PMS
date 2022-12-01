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
  image: String,
});

export default mongoose.model("users", userModel);
