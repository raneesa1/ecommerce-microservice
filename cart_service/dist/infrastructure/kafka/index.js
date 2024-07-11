"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consumer = exports.producer = exports.kafka = void 0;
const kafkajs_1 = require("kafkajs");
exports.kafka = new kafkajs_1.Kafka({
    clientId: 'cart-service',
    brokers: ["localhost:29092"]
});
exports.producer = exports.kafka.producer();
exports.consumer = exports.kafka.consumer({
    groupId: 'cart-service-kafka-group'
});
