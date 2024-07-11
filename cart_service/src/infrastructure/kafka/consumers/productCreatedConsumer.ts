import { Types } from "mongoose";
import {insertProduct} from "../../mongodb/repositories/addProduct"

export default async (data:{
    _id?:Types.ObjectId;
    name:string;
    description:string;
    price:number;
    stock:number;
})=>{
    try {
    await insertProduct(data)
    } catch (error:any) {
        throw new Error(error?.message)
    }
}