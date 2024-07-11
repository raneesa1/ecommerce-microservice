import { Types } from "mongoose";

export interface CartEntity {
    userId: Types.ObjectId;
    items: {
        productId: Types.ObjectId;
        quantity: number;
    }[];
}



export interface AddToCartRequest {
    userId: Types.ObjectId;
    productId: Types.ObjectId;
}
