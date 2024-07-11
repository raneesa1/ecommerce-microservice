import { UserEntity } from "../entities";
import { UserLoginEntity } from "../entities/userLoginEntity";

export interface ILoginUserUseCase{
    execute(data: UserLoginEntity): Promise<UserEntity | null>
}