import { Schema } from "mongoose";
import { insertUser } from "../../mongodb/repositories/user"; 


export default async (data:{
    _id: Schema.Types.ObjectId,
    username: string;
    email: string;
    password: string;
})=>{
    try {

       await insertUser(data)
    } catch (error:any) {
        throw new Error(error?.message)
    }     
}

