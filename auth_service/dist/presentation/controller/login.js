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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const generateToken_1 = __importDefault(require("../../../src/util/jwt/generateToken"));
const loginController = (dependencies) => {
    const { useCases: { loginUserUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        try {
            const userCredentials = req.body;
            const { email, password } = req.body;
            if (!email || !password) {
                res.status(400).json({ success: false, message: "Email and password are required" });
                return;
            }
            const user = yield loginUserUseCase(dependencies).execute(userCredentials);
            if (user) {
                const userId = (_b = (_a = user._id) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "";
                const token = (0, generateToken_1.default)({
                    userId: userId,
                    userEmail: user.email,
                    isAdmin: user.isAdmin,
                    isBlocked: user.isBlocked
                });
                res.cookie("auth", token, {
                    maxAge: 1000 * 60 * 60 * 24,
                    httpOnly: true
                });
                res.status(200).json({ success: true, data: user, message: "Login successful" });
            }
            else {
                res.status(401).json({ success: false, message: "Invalid email or password" });
            }
        }
        catch (error) {
            next(error);
        }
    });
};
exports.loginController = loginController;
