"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = void 0;
const addProduct_1 = require("./addProduct");
const listProducts_1 = require("./listProducts");
const controllers = (dependencies) => {
    return {
        addProduct: (0, addProduct_1.addProductController)(dependencies),
        listProduct: (0, listProducts_1.listProductsController)(dependencies)
    };
};
exports.controllers = controllers;
