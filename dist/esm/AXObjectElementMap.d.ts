import type { AXObjectModelRelationConcept, AXObjectName, TAXObjectQueryMap } from "./types.js";
type TAXObjectElementTuple = [AXObjectName, AXObjectModelRelationConcept[]];
type TAXObjectElements = TAXObjectElementTuple[];
declare const _default: TAXObjectQueryMap<TAXObjectElements, AXObjectName, AXObjectModelRelationConcept[]>;
export default _default;
