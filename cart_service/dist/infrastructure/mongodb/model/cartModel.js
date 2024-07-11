"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModel = void 0;
const mongoose_1 = require("mongoose");
const cartSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Types.ObjectId, required: true },
    items: [{
            productId: { type: mongoose_1.Types.ObjectId, required: true },
            quantity: { type: Number, required: true }
        }]
}, {
    timestamps: true
});
const CartModel = (0, mongoose_1.model)("Cart", cartSchema);
exports.CartModel = CartModel;
