import { Product } from "../entities";

export interface IListProductUseCase{
    execute(token:string):Promise <Product | null>
}