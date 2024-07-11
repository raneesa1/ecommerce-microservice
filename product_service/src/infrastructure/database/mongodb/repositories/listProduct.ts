import { Product } from "../../../../domain/entities";
import { product } from "../models/productSchema";
import { verifyToken } from "../../../../util/verifyToken";

export const listProduct = async (token: string): Promise<Product[] | null> => {
    try {
        const decodedToken: any =await verifyToken(token);
        const Role: string | undefined = decodedToken?.role;
        if (!Role) {
            throw new Error('Role not found in token payload');
        }
        if (Role === 'user') {
            throw new Error('Unauthorized access: User role does not have permission to list products');
        }


        const products: Product[] = await product.find();

        return products;
    } catch (error) {
        console.error("Failed to list products:", error);
        throw new Error("Failed to list products");
    }
};
