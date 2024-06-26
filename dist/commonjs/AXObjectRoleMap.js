"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const iterationDecorator_js_1 = __importDefault(require("./util/iterationDecorator.js"));
const AXObjectsMap_js_1 = __importDefault(require("./AXObjectsMap.js"));
const AXObjectRoleElements = [];
for (let [name, def] of AXObjectsMap_js_1.default.entries()) {
    const relatedConcepts = def.relatedConcepts;
    if (Array.isArray(relatedConcepts)) {
        relatedConcepts.forEach((relation) => {
            if (relation.module === "ARIA") {
                const concept = relation.concept;
                if (concept) {
                    let index = AXObjectRoleElements.findIndex(([key]) => key === name);
                    if (index === -1) {
                        AXObjectRoleElements.push([name, []]);
                        index = AXObjectRoleElements.length - 1;
                    }
                    AXObjectRoleElements[index][1].push(concept);
                }
            }
        });
    }
}
const AXObjectRoleMap = {
    entries: function () {
        return AXObjectRoleElements;
    },
    forEach: function (fn, thisArg = null) {
        for (let [key, values] of AXObjectRoleElements) {
            fn.call(thisArg, values, key, AXObjectRoleElements);
        }
    },
    get: function (key) {
        const item = AXObjectRoleElements.find((tuple) => tuple[0] === key);
        return item && item[1];
    },
    has: function (key) {
        return !!AXObjectRoleMap.get(key);
    },
    keys: function () {
        return AXObjectRoleElements.map(([key]) => key);
    },
    values: function () {
        return AXObjectRoleElements.map(([, values]) => values);
    },
};
exports.default = (0, iterationDecorator_js_1.default)(AXObjectRoleMap, AXObjectRoleMap.entries());
