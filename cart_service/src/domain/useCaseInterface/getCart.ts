import { CartEntity } from "../entities/cartEntity";


export interface IGetCartUseCase {
    execute(userId : string): Promise<CartEntity | null>;
}