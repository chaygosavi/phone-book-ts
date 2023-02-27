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

categoryRoutes.get("/:categoryId", async (req: Request, res: Response) => {
  // res.send("JAI SHREE RAM");

  const { categoryId } = req.params;

  try {
    const category = await PhoneBookModel.findById(categoryId);
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
  }
});

categoryRoutes.put("/:categoryId", async (req: Request, res: Response) => {
  // res.send("JAI SHREE RAM");
  const { title } = req.body;
  const { categoryId } = req.params;

  try {
    const updatedCategory = await PhoneBookModel.findById(categoryId);

    updatedCategory!.category = title;

    await updatedCategory?.save();

    res.status(200).json(updatedCategory);
  } catch (error) {
    console.log(error);
  }
});

export default categoryRoutes;
