import {Schema} from "mongoose"

enum Role{
    user = 'user',
    admin = 'admin'
}

export interface IUserEntity{
    _id: Schema.Types.ObjectId ;
    username:string;
    email:string;
    password:string;
    role:Role;
    isAdmin:boolean,
    isBlocked:boolean;
}

export interface IUserRequestEntity{
    _id: Schema.Types.ObjectId;
    username:string;
    email:string;
    password:string;
}