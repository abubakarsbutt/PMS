import express from "express";
import projectList from "../controller/projectsList.js";

const route = express();

route.get("/", projectList);

export default route;
