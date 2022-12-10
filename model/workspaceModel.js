import mongoose from "mongoose";

const workSpaceModel = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  font: {
    type: String,
  },
  primaryColor: {
    type: String,
  },
  secondaryColor: {
    type: String,
  },
  timeZone: {
    type: Date,
  },
  // members: {
  //   type: mongoose.Types.ObjectId,
  //   ref: "users",
  // },
});

export default mongoose.model("workspaces", workSpaceModel);
