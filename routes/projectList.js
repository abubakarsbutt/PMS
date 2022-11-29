const express = require("express");
const projectList = require("../controller/projectsList");

const route = express();

route.get("/", projectList);

module.exports = route;
