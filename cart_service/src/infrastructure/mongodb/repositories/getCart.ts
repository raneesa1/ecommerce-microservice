import { CartEntity } from "../../../domain/entities/cartEntity";
import { CartModel } from "../model/cartModel";

export const getCart = async (userId: string): Promise<CartEntity | null> => {
 try {
    const usersId = userId;
    const cartDocument: CartEntity | null = await CartModel.findOne({ userId });
    if (!cartDocument) {
      throw new Error("cart not found");
    }
    const cart: CartEntity = {
      userId: cartDocument.userId,
      items: cartDocument.items.map(item => ({
          productId: item.productId,
          quantity: item.quantity
      }))
  };
  
  return cart;
 } catch (error:any) {
    console.error("Error retrieving user's cart:", error);
    throw error;
 }
};
