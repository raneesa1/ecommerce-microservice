import {Request,Response,NextFunction} from 'express'
import { IDependencies } from '../../application/interface/IDependencies'
import { CartEntity} from '../../domain/entities/cartEntity'


export const addToCartController=(dependencies:IDependencies)=>{
    const {useCases:{addToCartUseCase}} = dependencies;
    return async(req:Request,res:Response,next:NextFunction): Promise <void> =>{
        try {
            const data=req.body;

         

            const user:CartEntity | null =await addToCartUseCase(dependencies).execute(data)
            res.status(200).json({
                success: true,
                user: user,
                message: "User Data inserted",
                })

        } catch (error:any) {
            next(error)
        }
    }
}