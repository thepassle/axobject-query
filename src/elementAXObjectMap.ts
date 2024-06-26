import { dequal } from "dequal/lite";
import AXObjects from "./AXObjectsMap.js";
import iterationDecorator from "./util/iterationDecorator.js";
import type {
  AXObjectModelRelationConcept,
  AXObjectName,
  TAXObjectQueryMap,
} from "../types.js";

type TElementAXObjectTuple = [AXObjectModelRelationConcept, AXObjectName[]];
type TElementAXObjects = TElementAXObjectTuple[];

const elementAXObjects: TElementAXObjects = [];

for (let [name, def] of AXObjects.entries()) {
  const relatedConcepts = def.relatedConcepts;
  if (Array.isArray(relatedConcepts)) {
    relatedConcepts.forEach((relation): void => {
      if (relation.module === "HTML") {
        const concept = relation.concept;
        if (concept != null) {
          const conceptStr = JSON.stringify(concept);
          let axObjects: AXObjectName[] | undefined;
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
          } else {
            elementAXObjects.push([concept, axObjects]);
          }
        }
      }
    });
  }
}

const elementAXObjectMap: TAXObjectQueryMap<
  TElementAXObjects,
  AXObjectModelRelationConcept,
  AXObjectName[]
> = {
  entries: function (): TElementAXObjects {
    return elementAXObjects;
  },
  forEach: function (
    fn: (
      values: AXObjectName[],
      key: AXObjectModelRelationConcept,
      elements: TElementAXObjects,
    ) => void,
    thisArg: any = null,
  ): void {
    for (let [key, values] of elementAXObjects) {
      fn.call(thisArg, values, key, elementAXObjects);
    }
  },
  get: function (
    key: AXObjectModelRelationConcept,
  ): AXObjectName[] | undefined {
    const item = elementAXObjects.find(
      (tuple) =>
        key.name === tuple[0].name &&
        dequal(key.attributes, tuple[0].attributes),
    );
    return item && item[1];
  },
  has: function (key: AXObjectModelRelationConcept): boolean {
    return !!elementAXObjectMap.get(key);
  },
  keys: function (): AXObjectModelRelationConcept[] {
    return elementAXObjects.map(([key]) => key);
  },
  values: function (): AXObjectName[][] {
    return elementAXObjects.map(([, values]) => values);
  },
};

export default iterationDecorator(
  elementAXObjectMap,
  elementAXObjectMap.entries(),
) as TAXObjectQueryMap<
  TElementAXObjects,
  AXObjectModelRelationConcept,
  AXObjectName[]
>;
