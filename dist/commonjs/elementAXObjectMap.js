"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lite_1 = require("dequal/lite");
const AXObjectsMap_js_1 = __importDefault(require("./AXObjectsMap.js"));
const iterationDecorator_js_1 = __importDefault(require("./util/iterationDecorator.js"));
const elementAXObjects = [];
for (let [name, def] of AXObjectsMap_js_1.default.entries()) {
    const relatedConcepts = def.relatedConcepts;
    if (Array.isArray(relatedConcepts)) {
        relatedConcepts.forEach((relation) => {
            if (relation.module === "HTML") {
                const concept = relation.concept;
                if (concept != null) {
                    const conceptStr = JSON.stringify(concept);
                    let axObjects;
                    let index = 0;
                    for (; index < elementAXObjects.length; index++) {
                        const key = elementAXObjects[index][0];
                        if (JSON.stringify(key) === conceptStr) {
                            axObjects = elementAXObjects[index][1];
                            break;
                        }
                    }
                    if (!Array.isArray(axObjects)) {
                        axObjects = [];
                    }
                    const loc = axObjects.findIndex((item) => item === name);
                    if (loc === -1) {
                        axObjects.push(name);
                    }
                    if (index < elementAXObjects.length) {
                        elementAXObjects.splice(index, 1, [concept, axObjects]);
                    }
                    else {
                        elementAXObjects.push([concept, axObjects]);
                    }
                }
            }
        });
    }
}
const elementAXObjectMap = {
    entries: function () {
        return elementAXObjects;
    },
    forEach: function (fn, thisArg = null) {
        for (let [key, values] of elementAXObjects) {
            fn.call(thisArg, values, key, elementAXObjects);
        }
    },
    get: function (key) {
        const item = elementAXObjects.find((tuple) => key.name === tuple[0].name &&
            (0, lite_1.dequal)(key.attributes, tuple[0].attributes));
        return item && item[1];
    },
    has: function (key) {
        return !!elementAXObjectMap.get(key);
    },
    keys: function () {
        return elementAXObjects.map(([key]) => key);
    },
    values: function () {
        return elementAXObjects.map(([, values]) => values);
    },
};
exports.default = (0, iterationDecorator_js_1.default)(elementAXObjectMap, elementAXObjectMap.entries());
