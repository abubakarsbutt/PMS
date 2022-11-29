const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mailer = require("../helper/mailer");
const { inviteTemplate } = require("./helper");
const userModel = require("../model/userModel");
const mongoose = require("mongoose");
const checkValidFileTypes = require("../helper/helper.js");

require("dotenv").config();

const inviteUser = async (req, res) => {
  const { username, email, role, newEmail, newRole } = req.body;
  try {
    const userExists = await userModel.findOne({ email: newEmail });
    if (userExists) {
      return res.status(500).json({ msg: "User Already Exists" });
    }

    const newUser = await userModel.create({
      role: newRole,
      email: newEmail,
    });
    const newToken = jwt.sign(
      {
        _id: newUser._id,
        role: newUser.role,
        email: newUser.email,
      },
      process.env.JWT_KEY
    );
    await mailer({
      to: newEmail,
      subject: "User Sign-Up",
      html: inviteTemplate({ username, token: newToken }),
    });

    res.status(200).json({ msg: "Invitation Successfully Sent." });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

const getUser = async (req, res) => {
  const { _id } = req.body;
  try {
    const user = await userModel.findById(mongoose.Types.ObjectId(_id));
    res.status(200).json({ user });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

const updateUser = async (req, res) => {
  // const id = req.params.id;
  const { newEmail, email, newUsername, newPassword, newImage } = req.body;
  try {
    const hashedPass = await bcrypt.hash(newPassword, 10);

    if (newImage) {
      const checkedFile = checkValidFileTypes({
        base64: newImage,
        validFileTypes: ["jpg", "jpeg", "png"],
      });

      if (newImage && !checkedFile.valid) {
        throw new Error("Invalid File Types!");
      }

      const buf = Buffer.from(
        newImage
          .replace("data:image/png;base64,", "")
          .replace("data:image/jpg;base64,", "")
          .replace("data:image/jpeg;base64,", ""),
        "base64"
      );

      profilePictureURL = await uploadPDFToS3({
        key: `${Math.floor(
          Math.random() * 10000000000000
        )}-${userId}-employer-picture`,
        ContentType: checkedFile.type,
        buf,
      });

      if (employer?.personalDetails?.newImage) {
        s3Bucket.deleteObject(
          { Key: employer?.personalDetails?.newImage },
          (err) => {
            if (err) throw new Error(err);
          }
        );
      }
    }

    const newUser = {
      username: newUsername,
      password: hashedPass,
      image: newImage,
    };
    const updatedUser = await userModel.findOneAndUpdate(
      { email: newEmail },
      newUser,
      {
        new: true,
      }
    );
    res.status(201).json({ user: updatedUser });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

const getAllUsers = async (req, res) => {
  const { role } = req.body;
  try {
    const allUsers = await userModel.find();
    if (!allUsers) {
      res.status(404).json({ msg: "No User Exists" });
    }
    res.status(200).json({ users: allUsers });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const getByNameOrEmail = async (req, res) => {
  const { username } = req.body;
  const { email } = req.body;
  // const filter = req?.body?.email ? req?.body?.email : req?.body?.username;
  try {
    if (req.body.email) {
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).json({ msg: "User not Found" });
      }
      res.status(200).json({ user });
    } else {
      const user = await userModel.findOne({ username });
      if (!user) {
        return res.status(404).json({ msg: "User not Found" });
      }
      res.status(200).json({ user });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  inviteUser,
  getUser,
  updateUser,
  getAllUsers,
  getByNameOrEmail,
};
