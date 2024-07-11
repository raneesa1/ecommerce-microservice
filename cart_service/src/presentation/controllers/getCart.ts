import { Request,Response,NextFunction } from 'express'
import { IDependencies } from '../../application/interface/IDependencies'
import { CartEntity } from '../../domain/entities/cartEntity';



export const getCart=(dependencies:IDependencies)=>{
    const {useCases:{getCart}} = dependencies;
    return async(req:Request,res:Response,next:NextFunction):Promise <void> =>{
        try {
            const userId = req.params.id;
            const cart:CartEntity | null = await getCart(dependencies).execute(userId);
            res.status(200).json({success:true,cart});
        } catch (error:any) {
            next(error)
        }
    }
}