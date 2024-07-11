"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = void 0;
const express_1 = require("express");
const controller_1 = require("../../presentation/controller");
const addProduct = (dependencies) => {
    const { addProduct, listProduct } = (0, controller_1.controllers)(dependencies);
    const router = (0, express_1.Router)();
    router.route("/addproduct").post(addProduct);
    router.route("/products").get(listProduct);
    return router;
};
exports.addProduct = addProduct;
