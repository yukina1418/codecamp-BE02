import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
  name: String,
  img: String,
});

export const Stock = mongoose.model("Stock", stockSchema);
