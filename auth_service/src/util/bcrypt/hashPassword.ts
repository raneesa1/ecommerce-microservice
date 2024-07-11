import { hash, genSalt } from "bcrypt";


export const hashPassword  = async (password: string) => 
{
    try {
        const hashedPassword = await hash(password, await genSalt(10));
        if (!hashedPassword) {
            throw new Error("Password hashing error!");
        }
    
        return hashedPassword;
    } catch (error: any) {
        throw new Error(error.message);
    }
} 
    