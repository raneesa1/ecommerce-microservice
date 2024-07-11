"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dependencies_1 = require("../config/dependencies");
const addProducts_1 = require("..//infrastructure/routes/addProducts");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT || 8003);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, addProducts_1.addProduct)(dependencies_1.dependencies));
app.use((err, req, res, next) => {
    console.error(err);
    const errorResponse = {
        errors: [{ message: (err === null || err === void 0 ? void 0 : err.message) || 'Something went wrong' }],
    };
    return res.status(500).json(errorResponse);
});
app.listen(PORT, () => {
    console.log(`connected to product service at ${PORT}`);
});
exports.default = app;
