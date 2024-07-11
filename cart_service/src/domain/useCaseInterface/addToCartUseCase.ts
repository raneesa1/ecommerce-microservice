import { CartEntity,AddToCartRequest } from "../entities/cartEntity";


export interface IaddToCartUseCase{
    execute(data:AddToCartRequest):Promise<CartEntity | null>
}