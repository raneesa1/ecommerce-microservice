import {product} from "../model/productModel"
import {AddProduct} from "../../../domain/entities/productEntity"


export const insertProduct =async(data:AddProduct)=>{
    try {
        const createdProduce = new product({
             _id:data._id,
             name:data.name,
             description:data.description,
             price:data.price,
             stock:data.stock,
        })
        await createdProduce.save()
    } catch (error:any) {
        throw new Error(error?.message)
    }
}