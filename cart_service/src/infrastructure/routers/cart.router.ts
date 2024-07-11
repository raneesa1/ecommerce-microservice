import { Router } from "express";
import { IDependencies } from "../../application/interface/IDependencies";
import { controllers } from "../../presentation/controllers";

export const cartRoutes=(dependencies:IDependencies)=>{
const {users,getCart} = controllers(dependencies)
    const router=Router();

    router.route("/addtocart").post(users)
    router.route("/getcart/:id").get(getCart)

    return router;
}