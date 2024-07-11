import {ObjectId} from "mongoose"

enum Role{
    user = 'user',
    admin = 'admin'
}

export interface UserEntity{
    _id: ObjectId ;
    username:string;
    email:string;
    password:string;
    role:Role;
    isAdmin:boolean,
    isBlocked:boolean;
}

