import { AXObjectModelRelationConcept, AXObjectName, TAXObjectQueryMap } from "./types.js";
type TAXObjectRoleTuple = [AXObjectName, AXObjectModelRelationConcept[]];
type TAXObjectRoleElements = TAXObjectRoleTuple[];
declare const _default: TAXObjectQueryMap<TAXObjectRoleElements, AXObjectName, AXObjectModelRelationConcept[]>;
export default _default;
