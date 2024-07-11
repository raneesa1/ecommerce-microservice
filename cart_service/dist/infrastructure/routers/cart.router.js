"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("../../presentation/controllers");
const cartRoutes = (dependencies) => {
    const { users, getCart } = (0, controllers_1.controllers)(dependencies);
    const router = (0, express_1.Router)();
    router.route("/addtocart").post(users);
    router.route("/getcart/:id").get(getCart);
    return router;
};
exports.cartRoutes = cartRoutes;
