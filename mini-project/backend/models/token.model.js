import mongoose from "mongoose";

const phoneSchema = new mongoose.Schema({
  token: String,
  phone: String,
  isAuth: false,
});

export const Phone = mongoose.model("Phone", phoneSchema);
