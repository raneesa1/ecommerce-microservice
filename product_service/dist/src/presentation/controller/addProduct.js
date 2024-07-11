"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductController = void 0;
const productValidation_1 = require("../../util/productValidation");
// import { productCreatedProducer } from "../../infrastructure/kafka/producers/productCreatedProducer";
const addProductController = (dependencies) => {
    const { useCases: { addProductUseCase }, } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = req.body;
            const validationResult = (0, productValidation_1.validateProductRequest)(data);
            if (!validationResult.isValid) {
                return res.status(400).json({ success: false, errors: validationResult.errors });
            }
            const product = yield addProductUseCase(dependencies).execute(data);
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
            }
            else {
                res.status(404).json({ success: false, message: "Product not found" });
            }
        }
        catch (error) {
            next(error);
        }
    });
};
exports.addProductController = addProductController;
