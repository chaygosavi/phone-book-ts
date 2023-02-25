import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});

const app = express();

app.get("/", (req, res, next) => {
  res.send("JAI SHREE RAM");
});

console.log("process.env.MONGO_URL", process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL!).then(() => {
  app.listen(process.env.PORT);
  console.log(`Listening on ${process.env.PORT}`);
});
