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
  // const max = 3 * 24 * 60 * 60;
  const max = 10 * 60;
  const token = jwt.sign(
    {
      _id: user._id,
      role: user.role,
      email: user.email,
      username: user.username,
    },
    process.env.JWT_KEY
    // { expiresIn: max }
  );

  return res
    .header("authorization", token)
    .status(200)
    .json({ user, msg: "Logged In Successfully" });
};

export default { login };
