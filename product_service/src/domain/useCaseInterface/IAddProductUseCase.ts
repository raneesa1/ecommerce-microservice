import { Product,ProductRequest } from "../entities";

export interface IAddProductUseCase{
    execute(data: ProductRequest): Promise<Product | null >;
}