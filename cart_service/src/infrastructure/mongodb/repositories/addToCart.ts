import { AddToCartRequest, CartEntity } from "../../../domain/entities/cartEntity";
import { CartModel, ICartDocument } from "../model/cartModel";

export const addToCart = async (data: AddToCartRequest): Promise<CartEntity | null> => {
    try {
        let cart: ICartDocument | null = await CartModel.findOne({ userId: data.userId });
        if (!cart) {
            cart = await CartModel.create({ userId: data.userId, items: [] });
        }
        const existingItemIndex = cart.items.findIndex(item => item.productId.equals(data.productId));
        if (existingItemIndex !== -1) {
            cart.items[existingItemIndex].quantity += 1;
        } else {
            cart.items.push({ productId: data.productId, quantity: 1 });
        }

        const updatedCart: CartEntity | null = await cart.save(); 

        return updatedCart;
    } catch (error:any) {
        throw new Error(error?.message);
    }
};
