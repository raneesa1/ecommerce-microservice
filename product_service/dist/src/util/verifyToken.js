"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (token) => {
    const secretKey = process.env.AUTH_JWT_SECRET;
    try {
        console.log("here");
        const decodedToken = jsonwebtoken_1.default.verify(token, secretKey);
        return decodedToken;
    }
    catch (error) {
        throw new Error(error.message);
        // throw new Error('Invalid token');
    }
};
exports.verifyToken = verifyToken;
