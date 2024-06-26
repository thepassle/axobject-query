"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = iterationDecorator;
const iteratorProxy_js_1 = __importDefault(require("./iteratorProxy.js"));
function iterationDecorator(collection, entries) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        Object.defineProperty(collection, Symbol.iterator, {
            value: iteratorProxy_js_1.default.bind(entries),
        });
    }
    return collection;
}
