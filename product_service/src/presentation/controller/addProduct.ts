import { Response, NextFunction, Request } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { Product } from "../../domain/entities";
import { validateProductRequest } from "../../util/productValidation";
// import { productCreatedProducer } from "../../infrastructure/kafka/producers/productCreatedProducer";

export const addProductController = (dependencies: IDependencies) => {
  const {
    useCases: { addProductUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const validationResult = validateProductRequest(data);

      if (!validationResult.isValid) {
        return res.status(400).json({ success: false, errors: validationResult.errors });
      }

      const product: Product | null = await addProductUseCase(dependencies).execute(data);

      if (product) {
        const addedProduct = {
          _id: product._id,
          name: product.name,
          description: product.description,
          price: product.price,
          stock: product.stock,
        };

        // productCreatedProducer(addedProduct);

        // Send the response after processing
        res.status(201).json({ success: true, data: product });
      } else {
        res.status(404).json({ success: false, message: "Product not found" });
      }
    } catch (error: any) {
      next(error);
    }
  };
};
