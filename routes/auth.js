import express from "express";

import { login } from "../controller/loginController.js";
import {
  inviteUser,
  getUser,
  updateUser,
  getAllUsers,
  setPassword,
} from "../controller/userController.js";
import ensureAuth from "../middleware/ensureAuth.js";

const route = express();

route.post("/login", login);
route.post("/invite-user", ensureAuth, inviteUser);
route.get("/get-user", ensureAuth, getUser);
route.put("/set-password", ensureAuth, setPassword);
route.put("/update-user", ensureAuth, updateUser);
route.get("/all-users", getAllUsers);

export default route;
