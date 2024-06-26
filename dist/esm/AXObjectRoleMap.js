import iterationDecorator from "./util/iterationDecorator.js";
import AXObjects from "./AXObjectsMap.js";
const AXObjectRoleElements = [];
for (let [name, def] of AXObjects.entries()) {
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
export default iterationDecorator(AXObjectRoleMap, AXObjectRoleMap.entries());
