import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const ensureAuth = (req, res, next) => {
  const token = req?.header("Authorization");
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_KEY);

      (req.body._id = decoded._id),
        (req.body.username = decoded.username),
        (req.body.email = decoded.email),
        (req.body.role = decoded.role),
        next();
    } catch (err) {
      return res.status(401).json({ msg: "Session Expired!" });
    }
  } else {
    return res.status(401).json({ msg: "Login Required!" });
  }
};

export default ensureAuth;
