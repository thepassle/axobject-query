import iterationDecorator from "./util/iterationDecorator.js";
import AXObjects from "./AXObjectsMap.js";
import type {
  AXObjectModelRelationConcept,
  AXObjectName,
  TAXObjectQueryMap,
} from "../types.js";

type TAXObjectElementTuple = [AXObjectName, AXObjectModelRelationConcept[]];
type TAXObjectElements = TAXObjectElementTuple[];

const AXObjectElements: TAXObjectElements = [];

for (let [name, def] of AXObjects.entries()) {
  const relatedConcepts = def.relatedConcepts;
  if (Array.isArray(relatedConcepts)) {
    relatedConcepts.forEach((relation): void => {
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

const AXObjectElementMap: TAXObjectQueryMap<
  TAXObjectElements,
  AXObjectName,
  AXObjectModelRelationConcept[]
> = {
  entries: function (): TAXObjectElements {
    return AXObjectElements;
  },
  forEach: function (
    fn: (
      values: AXObjectModelRelationConcept[],
      key: AXObjectName,
      elements: TAXObjectElements,
    ) => void,
    thisArg: any = null,
  ): void {
    for (let [key, values] of AXObjectElements) {
      fn.call(thisArg, values, key, AXObjectElements);
    }
  },
  get: function (
    key: AXObjectName,
  ): AXObjectModelRelationConcept[] | undefined {
    const item = AXObjectElements.find((tuple) => tuple[0] === key);
    return item && item[1];
  },
  has: function (key: AXObjectName): boolean {
    return !!AXObjectElementMap.get(key);
  },
  keys: function (): AXObjectName[] {
    return AXObjectElements.map(([key]) => key);
  },
  values: function (): AXObjectModelRelationConcept[][] {
    return AXObjectElements.map(([, values]) => values);
  },
};

export default iterationDecorator(
  AXObjectElementMap,
  AXObjectElementMap.entries(),
) as TAXObjectQueryMap<
  TAXObjectElements,
  AXObjectName,
  AXObjectModelRelationConcept[]
>;
