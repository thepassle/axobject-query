import iterationDecorator from "./util/iterationDecorator.js";
import AXObjects from "./AXObjectsMap.js";
import {
  AXObjectModelRelationConcept,
  AXObjectName,
  TAXObjectQueryMap,
} from "../types.js";

type TAXObjectRoleTuple = [AXObjectName, AXObjectModelRelationConcept[]];
type TAXObjectRoleElements = TAXObjectRoleTuple[];

const AXObjectRoleElements: TAXObjectRoleElements = [];

for (let [name, def] of AXObjects.entries()) {
  const relatedConcepts = def.relatedConcepts;
  if (Array.isArray(relatedConcepts)) {
    relatedConcepts.forEach((relation): void => {
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

const AXObjectRoleMap: TAXObjectQueryMap<
  TAXObjectRoleElements,
  AXObjectName,
  AXObjectModelRelationConcept[]
> = {
  entries: function (): TAXObjectRoleElements {
    return AXObjectRoleElements;
  },
  forEach: function (
    fn: (
      values: AXObjectModelRelationConcept[],
      key: AXObjectName,
      elements: TAXObjectRoleElements,
    ) => void,
    thisArg: any = null,
  ): void {
    for (let [key, values] of AXObjectRoleElements) {
      fn.call(thisArg, values, key, AXObjectRoleElements);
    }
  },
  get: function (
    key: AXObjectName,
  ): AXObjectModelRelationConcept[] | undefined {
    const item = AXObjectRoleElements.find((tuple) => tuple[0] === key);
    return item && item[1];
  },
  has: function (key: AXObjectName): boolean {
    return !!AXObjectRoleMap.get(key);
  },
  keys: function (): AXObjectName[] {
    return AXObjectRoleElements.map(([key]) => key);
  },
  values: function (): AXObjectModelRelationConcept[][] {
    return AXObjectRoleElements.map(([, values]) => values);
  },
};

export default iterationDecorator(
  AXObjectRoleMap,
  AXObjectRoleMap.entries(),
) as TAXObjectQueryMap<
  TAXObjectRoleElements,
  AXObjectName,
  AXObjectModelRelationConcept[]
>;
