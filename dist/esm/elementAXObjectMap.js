import { dequal } from "dequal/lite";
import AXObjects from "./AXObjectsMap.js";
import iterationDecorator from "./util/iterationDecorator.js";
const elementAXObjects = [];
for (let [name, def] of AXObjects.entries()) {
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
            dequal(key.attributes, tuple[0].attributes));
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
export default iterationDecorator(elementAXObjectMap, elementAXObjectMap.entries());
