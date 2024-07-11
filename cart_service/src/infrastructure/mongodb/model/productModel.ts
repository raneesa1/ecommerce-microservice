import mongoose, { Schema, Document } from "mongoose";
import { AddProduct } from "../../../domain/entities/productEntity";

const productSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
},{ timestamps : true });

export const product = mongoose.model<AddProduct & Document>(
  "Product",
  productSchema
);
