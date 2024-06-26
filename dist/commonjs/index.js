"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.elementAXObjects = exports.AXObjects = exports.AXObjectRoles = exports.AXObjectElements = void 0;
const AXObjectElementMap_js_1 = __importDefault(require("./AXObjectElementMap.js"));
const AXObjectRoleMap_js_1 = __importDefault(require("./AXObjectRoleMap.js"));
const AXObjectsMap_js_1 = __importDefault(require("./AXObjectsMap.js"));
const elementAXObjectMap_js_1 = __importDefault(require("./elementAXObjectMap.js"));
exports.AXObjectElements = AXObjectElementMap_js_1.default;
exports.AXObjectRoles = AXObjectRoleMap_js_1.default;
exports.AXObjects = AXObjectsMap_js_1.default;
exports.elementAXObjects = elementAXObjectMap_js_1.default;
