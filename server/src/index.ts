import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes";
import { contactRoutes } from "./routes/contactRoutes";

dotenv.config({
  path: "../.env",
});

const app = express();
app.use(express.json());
app.use(cors());

app.use("/category", categoryRoutes);
app.use("/category", contactRoutes);

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL!).then(() => {
  app.listen(process.env.PORT);
  console.log(`Listening on ${process.env.PORT}`);
});
