import express, { Request, Response } from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import PhoneBookModel from "./models/phoneBook";
import cors from "cors";

dotenv.config({
  path: "../.env",
});

const app = express();
app.use(express.json());
app.use(cors());

app.post("/", async (req: Request, res: Response) => {
  // res.send("JAI SHREE RAM");

  const { category } = req.body;

  try {
    const newCategory = new PhoneBookModel({
      category,
    });

    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    console.log(error);
  }
});

app.get("/", async (req: Request, res: Response) => {
  // res.send("JAI SHREE RAM");

  try {
    const newCategory = await PhoneBookModel.find();

    res.status(200).json(newCategory);
  } catch (error) {
    console.log(error);
  }
});

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL!).then(() => {
  app.listen(process.env.PORT);
  console.log(`Listening on ${process.env.PORT}`);
});
