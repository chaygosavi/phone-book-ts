import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes";

dotenv.config({
  path: "../.env",
});

const app = express();
app.use(express.json());
app.use(cors());

app.use("/category", categoryRoutes);

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL!).then(() => {
  app.listen(process.env.PORT);
  console.log(`Listening on ${process.env.PORT}`);
});
