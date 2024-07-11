import { UserLoginEntity } from "../../domain/entities/userLoginEntity";
import { IDependencies } from "../interfaces/IDependencies";

export const loginUserUseCase=(dependencies:IDependencies)=>{
    const {repositories:{login}} = dependencies;

    return{
        execute:async(data:UserLoginEntity)=>{
            try{
                return await login(data)
            }catch(error:any){
                throw new Error(error?.message)
            }
        }
    }
}