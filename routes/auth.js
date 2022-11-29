const express = require("express");

const { login } = require("../controller/loginController");
const {
  inviteUser,
  getUser,
  updateUser,
  getAllUsers,
  getByNameOrEmail,
} = require("../controller/userController");
const ensureAuth = require("../middleware/ensureAuth");

const route = express();

route.post("/login", login);
route.post("/invite-user", ensureAuth, inviteUser);
route.get("/get-user", ensureAuth, getUser);
route.put("/update-user", ensureAuth, updateUser);
route.get("/all-users", getAllUsers);
route.get("/user-by-name-email", getByNameOrEmail);

module.exports = route;
