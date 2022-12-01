import express from "express";

import { login } from "../controller/loginController.js";
import {
  inviteUser,
  getUser,
  updateUser,
  getAllUsers,
  getByNameOrEmail,
} from "../controller/userController.js";
import ensureAuth from "../middleware/ensureAuth.js";

const route = express();

route.post("/login", login);
route.post("/invite-user", ensureAuth, inviteUser);
route.get("/get-user", ensureAuth, getUser);
route.put("/update-user", ensureAuth, updateUser);
route.get("/all-users", getAllUsers);
route.get("/user-by-name-email", getByNameOrEmail);

export default route;
