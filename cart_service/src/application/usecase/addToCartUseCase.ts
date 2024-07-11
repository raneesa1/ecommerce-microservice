import { AddToCartRequest } from "../../domain/entities/cartEntity";
import { IDependencies } from "../interface/IDependencies";

export const addToCartUseCase=(dependencies:IDependencies)=>{
    const {repositories:{addToCart}}=dependencies;

    return {
        execute:async(data:AddToCartRequest)=>{
            try {
                return await addToCart(data)
            } catch (error:any) {
                throw new Error(error?.message)
            }
        }
    }
}