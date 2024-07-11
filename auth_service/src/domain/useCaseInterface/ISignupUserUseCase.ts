import { UserEntity } from "../entities";

export interface ISignupUserUseCase{
    execute (user: UserEntity):Promise< UserEntity | null>
}