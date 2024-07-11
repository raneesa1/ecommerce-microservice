"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = void 0;
const login_1 = require("./login");
const signup_1 = require("./signup");
const controllers = (dependencies) => {
    return {
        signup: (0, signup_1.signupController)(dependencies),
        login: (0, login_1.loginController)(dependencies),
    };
};
exports.controllers = controllers;
