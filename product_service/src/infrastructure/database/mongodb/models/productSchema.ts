import mongoose, { Schema, Document } from "mongoose";
import { Product } from "../../../../domain/entities/product";

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

export const product = mongoose.model<Product & Document>(
  "Product",
  productSchema
);
