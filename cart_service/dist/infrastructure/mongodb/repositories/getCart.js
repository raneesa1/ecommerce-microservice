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
exports.getCart = void 0;
const cartModel_1 = require("../model/cartModel");
const getCart = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usersId = userId;
        const cartDocument = yield cartModel_1.CartModel.findOne({ userId });
        if (!cartDocument) {
            throw new Error("cart not found");
        }
        const cart = {
            userId: cartDocument.userId,
            items: cartDocument.items.map(item => ({
                productId: item.productId,
                quantity: item.quantity
            }))
        };
        return cart;
    }
    catch (error) {
        console.error("Error retrieving user's cart:", error);
        throw error;
    }
});
exports.getCart = getCart;
