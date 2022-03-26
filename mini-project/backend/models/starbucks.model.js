import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
  token: String,
  img: String,
});

export const Stock = mongoose.model("Stock", stockSchema);
