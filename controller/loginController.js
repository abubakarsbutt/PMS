import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../model/userModel.js";

dotenv.config();

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
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

export default { login };
