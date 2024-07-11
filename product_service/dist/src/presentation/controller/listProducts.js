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
exports.listProductsController = void 0;
const listProductsController = (dependencies) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const { useCases: { listProductUseCase } } = dependencies;
        try {
            const token = req.cookies.user_jwt;
            console.log("================================>", token);
            if (!token) {
                throw new Error('Authentication failed due to token undefined');
            }
            const products = yield listProductUseCase(dependencies).execute(token);
            if (!products) {
                throw new Error('No products found');
            }
            res.status(200).json({ success: true, data: products });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.listProductsController = listProductsController;
