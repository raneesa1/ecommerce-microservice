"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = void 0;
const addToCart_1 = require("./addToCart");
const getCart_1 = require("./getCart");
const controllers = (dependencies) => {
    return {
        users: (0, addToCart_1.addToCartController)(dependencies),
        getCart: (0, getCart_1.getCart)(dependencies)
    };
};
exports.controllers = controllers;
