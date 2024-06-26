import iteratorProxy from "./iteratorProxy.js";
export default function iterationDecorator(collection, entries) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        Object.defineProperty(collection, Symbol.iterator, {
            value: iteratorProxy.bind(entries),
        });
    }
    return collection;
}
