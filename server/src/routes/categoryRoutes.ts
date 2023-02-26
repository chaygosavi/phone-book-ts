import express, { Request, Response } from "express";
import PhoneBookModel from "../models/phoneBook";
const categoryRoutes = express.Router();

categoryRoutes.get("/", async (req: Request, res: Response) => {
  // res.send("JAI SHREE RAM");

  try {
    const newCategory = await PhoneBookModel.find();

    res.status(200).json(newCategory);
  } catch (error) {
    console.log(error);
  }
});

categoryRoutes.post("/", async (req: Request, res: Response) => {
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

categoryRoutes.delete("/", async (req: Request, res: Response) => {
  const { categoryId } = req.body;

  try {
    const deletedCategory = await PhoneBookModel.findByIdAndDelete(categoryId);
    res.status(200).json(deletedCategory);
  } catch (error) {
    console.log(error);
  }
});

export default categoryRoutes;
