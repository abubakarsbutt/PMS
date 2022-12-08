import express from "express";
import auth from "./routes/auth.js";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const corsOptions = {
  origin: "*",
  exposedHeaders: ["authorization"],
};

const app = express();

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/auth", auth);

app.get("/", (req, res) => {
  res.send("Holmes");
});

mongoose.connect(process.env.MONGO_URL);

app.listen(process.env.PORT, () => {
  console.log(`Server is Up and Running on ${process.env.PORT}`);
});
