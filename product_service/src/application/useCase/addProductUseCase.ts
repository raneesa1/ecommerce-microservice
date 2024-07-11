import { ProductRequest } from "../../domain/entities";
import { IDependencies } from "../interfaces/IDependencies";

export const addProductUseCase=(dependencies:IDependencies)=>{
    const {repositories:{addProduct}} = dependencies;
    return {
        execute:async (data:ProductRequest)=>{
            try {
                return await addProduct(data)
            } catch (error:any) {
                throw new Error(error?.message)
            }
        }
    }
}