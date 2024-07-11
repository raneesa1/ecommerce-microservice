import { IDependencies } from "../../application/interface/IDependencies";
import {addToCartController} from './addToCart'
import {getCart} from './getCart'

export const controllers=(dependencies:IDependencies)=>{
    return{
        users:addToCartController(dependencies),
        getCart:getCart(dependencies)
    }
};
