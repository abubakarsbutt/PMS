import express from "express";
import { createWorkspace } from "../controller/workSpaceController.js";
import ensureAuth from "../middleware/ensureAuth.js";

const route = express();

route.post("/create-workspace", createWorkspace);

export default route;
