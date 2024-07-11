import { IDependencies } from "../application/interface/IDependencies";
import * as useCases from "../application/usecase"
import * as repositories from '../infrastructure/mongodb/repositories'

export const dependencies:IDependencies={
useCases,
repositories
}