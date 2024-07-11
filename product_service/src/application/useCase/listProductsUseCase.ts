import { IDependencies } from "../interfaces/IDependencies";


export const listProductUseCase=(dependencies:IDependencies)=>{
    const {repositories:{listProduct}} = dependencies;
    return{
        execute:async(token:string)=>{
            try {
                return await listProduct(token)
            } catch (error:any) {
                throw new Error(error?.message)
            }
        }
    }
}