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
exports.signupController = void 0;
const hashPassword_1 = require("../../util/bcrypt/hashPassword");
const generateToken_1 = __importDefault(require("../../util/jwt/generateToken"));
// import { userCreatedProducer } from "../../infrastructure/kafka/producers/userCreatedProducers";
const signupController = (dependencies) => {
    const { useCases: { signupUserUseCase, findUserByEmailUseCase }, } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        try {
            const credentials = req.body;
            if (!credentials.username || !credentials.username.trim()) {
                res
                    .status(400)
                    .json({ success: false, message: "Username cannot be empty" });
                return;
            }
            if (!credentials.email || !credentials.password) {
                res
                    .status(400)
                    .json({ success: false, message: "Email and password are required" });
                return;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(credentials.email)) {
                res
                    .status(400)
                    .json({ success: false, message: "Invalid email format" });
                return;
            }
            if (credentials.password.length < 6) {
                res
                    .status(400)
                    .json({
                    success: false,
                    message: "Password must be at least 6 characters long",
                });
                return;
            }
            console.log("Searching for user with email:", credentials.email);
            try {
                const existingUser = yield findUserByEmailUseCase(dependencies).execute(credentials.email);
                console.log("Existing user:", existingUser);
                if (existingUser) {
                    res
                        .status(400)
                        .json({ success: false, message: "Email already exists" });
                    return;
                }
            }
            catch (error) {
                console.error("Error finding user by email:", error);
            }
            const hashedPassword = yield (0, hashPassword_1.hashPassword)(credentials.password);
            credentials.password = hashedPassword;
            const user = yield signupUserUseCase(dependencies).execute(req.body);
            if (user) {
                const userId = (_b = (_a = user._id) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "";
                const token = (0, generateToken_1.default)({
                    userId: userId,
                    userEmail: user.email,
                    isAdmin: user.isAdmin,
                    isBlocked: user.isBlocked,
                });
                if (user.isAdmin) {
                    res.cookie("user_jwt", token, {
                        maxAge: 1000 * 60 * 60 * 24,
                        httpOnly: true,
                    });
                }
                else {
                    res.cookie("admin_jwt", token, {
                        maxAge: 1000 * 60 * 60 * 24,
                        httpOnly: true,
                    });
                }
                res
                    .status(201)
                    .json({ success: true, data: user, message: "User Created" });
                const addedUser = {
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    password: user.password,
                    role: user.role,
                    isBlocked: user.isBlocked,
                    isAdmin: user.isAdmin,
                };
                if (addedUser) {
                    // userCreatedProducer(addedUser);
                }
            }
            else {
                res.status(404).json({ success: false, message: "User not found" });
            }
        }
        catch (error) {
            next(error);



            
        }
    });
};
exports.signupController = signupController;
