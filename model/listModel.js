const mongoose = require("mongoose");

const listModel = mongoose.Schema({
  project: String,
  milestone: String,
  task: String,
  id: String,
  type: String,
  assignee: String,
  group: String,
  Status: String,
  expected: String,
  estimated: String,
  tracked: String,
  start: String,
  due: String,
  closed: String,
  qa: String,
  created: String,
  bgColor: String,
  grey: String,
  img: String,
});

module.exports = mongoose.model("List", listModel);
