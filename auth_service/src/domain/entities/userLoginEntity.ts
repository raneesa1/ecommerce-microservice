import {ObjectId} from "mongoose"

export interface UserLoginEntity{
    _id?: ObjectId,
    email:string,
    password:string
}