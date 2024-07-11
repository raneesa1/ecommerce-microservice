"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSubscriber = void 0;
const userCreatedConsumers_1 = __importDefault(require("./consumers/userCreatedConsumers"));
const productCreatedConsumer_1 = __importDefault(require("./consumers/productCreatedConsumer"));
const createSubscriber = () => {
    return {
        userCreated: userCreatedConsumers_1.default,
        productcreated: productCreatedConsumer_1.default
    };
};
exports.createSubscriber = createSubscriber;
