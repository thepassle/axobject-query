import iterationDecorator from "./util/iterationDecorator.js";
import AXObjects from "./AXObjectsMap.js";
const AXObjectElements = [];
for (let [name, def] of AXObjects.entries()) {
    const relatedConcepts = def.relatedConcepts;
    if (Array.isArray(relatedConcepts)) {
        relatedConcepts.forEach((relation) => {
            if (relation.module === "HTML") {
                const concept = relation.concept;
                if (concept) {
                    let index = AXObjectElements.findIndex(([key]) => key === name);
                    if (index === -1) {
                        AXObjectElements.push([name, []]);
                        index = AXObjectElements.length - 1;
                    }
                    AXObjectElements[index][1].push(concept);
                }
            }
        });
    }
}
const AXObjectElementMap = {
    entries: function () {
        return AXObjectElements;
    },
    forEach: function (fn, thisArg = null) {
        for (let [key, values] of AXObjectElements) {
            fn.call(thisArg, values, key, AXObjectElements);
        }
    },
    get: function (key) {
        const item = AXObjectElements.find((tuple) => tuple[0] === key);
        return item && item[1];
    },
    has: function (key) {
        return !!AXObjectElementMap.get(key);
    },
    keys: function () {
        return AXObjectElements.map(([key]) => key);
    },
    values: function () {
        return AXObjectElements.map(([, values]) => values);
    },
};
export default iterationDecorator(AXObjectElementMap, AXObjectElementMap.entries());
