import { Schema } from "mongoose";
import { insertUser } from "../../mongodb/repositories/user"; 


export default async (data:{
    _id: Schema.Types.ObjectId,
    username: string;
    email: string;
    password: string;
})=>{
    try {
        console.log("🚀 ~ file: userCreatedConsumers.ts:17 ~ _id:", data)
       await insertUser(data)
    } catch (error:any) {
        throw new Error(error?.message)
    }     
}

