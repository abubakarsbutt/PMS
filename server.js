const express = require("express");
const projectList = require("./routes/projectList");
const auth = require("./routes/auth");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const corsOptions = {
  origin: "*",
  exposedHeaders: ["authorization"],
};

const app = express();

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/routes", projectList);
app.use("/auth", auth);

app.get("/", (req, res) => {
  res.send("Holmes");
});

mongoose.connect(process.env.MONGO_URL);

app.listen(process.env.PORT, () => {
  console.log(`Server is Up and Running on ${process.env.PORT}`);
});
