import {IAddProductUseCase, IListProductUseCase} from "../../domain/useCaseInterface"
import { IDependencies } from "./IDependencies";


export interface IUseCases{
    addProductUseCase:(dependencies:IDependencies)=> IAddProductUseCase;
    listProductUseCase:(dependencies:IDependencies)=> IListProductUseCase;
}

