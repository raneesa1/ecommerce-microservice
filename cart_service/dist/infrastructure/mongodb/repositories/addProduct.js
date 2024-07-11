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
exports.insertProduct = void 0;
const productModel_1 = require("../model/productModel");
const insertProduct = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createdProduce = new productModel_1.product({
            _id: data._id,
            name: data.name,
            description: data.description,
            price: data.price,
            stock: data.stock,
        });
        yield createdProduce.save();
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.insertProduct = insertProduct;
