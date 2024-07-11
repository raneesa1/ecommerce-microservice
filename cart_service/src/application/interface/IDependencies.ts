import {IUseCases} from "./IUseCases"
import { IRepositories } from "./IRepositories"

export interface IDependencies{
    repositories:IRepositories;
    useCases:IUseCases;
}