import { ObjectId } from "mongoose";

export interface ProductRequest {
    _id:ObjectId
    name: string;
    description: string;
    price: number;
    stock:number;
}