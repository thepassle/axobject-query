import iteratorProxy from "./iteratorProxy.js";

export default function iterationDecorator<T>(
  collection: T,
  entries: Array<any>,
): T {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    Object.defineProperty(collection, Symbol.iterator, {
      value: iteratorProxy.bind(entries),
    });
  }

  return collection;
}
