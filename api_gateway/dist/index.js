"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_http_proxy_1 = __importDefault(require("express-http-proxy"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/auth", (0, express_http_proxy_1.default)("http://localhost:8001/"));
app.use('/product', (0, express_http_proxy_1.default)("http://localhost:8003/"));
app.use('/cart', (0, express_http_proxy_1.default)("http://localhost:8004/"));
app.listen(PORT, () => {
    console.log(`Gateway is Listening to Port : ${PORT}`);
});
