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
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopConsumer = void 0;
const _1 = require(".");
const stopConsumer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Stopping consumer...");
        yield _1.consumer.stop();
        yield _1.consumer.disconnect();
        console.log("Consumer stopped.");
    }
    catch (error) {
        console.error("Error stopping consumer:", error);
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.stopConsumer = stopConsumer;
