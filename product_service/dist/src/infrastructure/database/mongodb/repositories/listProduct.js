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
exports.listProduct = void 0;
const productSchema_1 = require("../models/productSchema");
const verifyToken_1 = require("../../../../util/verifyToken");
const listProduct = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const decodedToken = yield (0, verifyToken_1.verifyToken)(token);
        const Role = decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.role;
        if (!Role) {
            throw new Error('Role not found in token payload');
        }
        if (Role === 'user') {
            throw new Error('Unauthorized access: User role does not have permission to list products');
        }
        const products = yield productSchema_1.product.find();
        return products;
    }
    catch (error) {
        console.error("Failed to list products:", error);
        throw new Error("Failed to list products");
    }
});
exports.listProduct = listProduct;
