import { UserEntity,UserLoginEntity } from "../../domain/entities";

export interface IRepositories{
    signup:(data:UserEntity)=> Promise<UserEntity | null>;
    login:(data:UserLoginEntity)=>Promise<UserEntity | null>;
    findByEmail: (email: string) => Promise<UserEntity | null>;
}