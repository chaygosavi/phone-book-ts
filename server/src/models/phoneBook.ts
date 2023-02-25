import { Schema, model } from "mongoose";

const phoneBookSchema = new Schema({
  category: String,
  contacts: [
    {
      name: String,
      description: String,
      number: String,
    },
  ],
});

export default model("PhoneBook", phoneBookSchema);
