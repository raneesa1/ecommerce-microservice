import { IDependencies } from "../interface/IDependencies";


export const getCart=(dependencies:IDependencies)=>{
    const {repositories:{getCart}} = dependencies;
    return{
        execute: async (userid:string)=>{
            try {
                return await getCart(userid);
            } catch (error:any) {
                throw new Error(error?.message)
            }
        }
    }
}