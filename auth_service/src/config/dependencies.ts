import * as repositories from "../infrastructure/database/repositories"
import {IDependencies} from "../application/interfaces/IDependencies"
import * as useCases from "../application/useCase"

export const dependencies:IDependencies={
    useCases,
    repositories
}

