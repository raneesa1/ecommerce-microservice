import { IDependencies } from "../../application/interfaces/IDependencies";
import { addProductController } from "./addProduct";
import {listProductsController} from "./listProducts"

export const controllers = (dependencies: IDependencies) => {
    return{
        addProduct:addProductController(dependencies),
        listProduct:listProductsController(dependencies)
    }
};
