"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const index_1 = require("../../presentation/controller/index");
const authRoutes = (dependencies) => {
    const { signup, login } = (0, index_1.controllers)(dependencies);
    const router = (0, express_1.Router)();
    router.route("/signup").post(signup);
    router.route("/login").post(login);
    return router;
};
exports.authRoutes = authRoutes;
