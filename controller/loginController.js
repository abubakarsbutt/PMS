require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

const login = async (req, res) => {
  let { email, password } = req.body;

  let user = await userModel.findOne({ email });
  if (!user) {
    return res.status(404).send({ msg: "Email not found!" });
  }

  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) {
    return res.status(404).send({ msg: "Invalid Password Entered!" });
  }
  const token = jwt.sign(
    {
      _id: user._id,
      role: user.role,
      email: user.email,
      username: user.username,
    },
    process.env.JWT_KEY
  );

  return res.header("authorization", token).status(200).json({ user });
};

module.exports = { login };
