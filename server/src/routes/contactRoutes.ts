import express, { Request, Response } from "express";
import PhoneBookModel from "../models/phoneBook";

export const contactRoutes = express.Router();

contactRoutes.post(
  "/:categoryId/contact",
  async (req: Request, res: Response) => {
    const { categoryId } = req.params;
    const { name, description, number } = req.body;

    const category = await PhoneBookModel.findByIdAndUpdate(
      { _id: categoryId },
      {
        $push: { contacts: { name, description, number } },
      },
      {
        new: true,
      }
    );

    res.status(201).json(category);
    try {
    } catch (error) {
      console.log(error);
    }
  }
);
