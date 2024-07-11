import * as repositories from "../infrastructure/database/mongodb/repositories"
import * as useCases from "../application/useCase"
import { IDependencies } from "../application/interfaces/IDependencies"

export const dependencies : any ={
    useCases,
    repositories
}