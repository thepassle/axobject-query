import type { AXObjectModelDefinition, AXObjectName, TAXObjectQueryMap } from "./types.js";
type TAXObjectsTuple = [AXObjectName, AXObjectModelDefinition];
type TAXObjects = TAXObjectsTuple[];
declare const _default: TAXObjectQueryMap<TAXObjects, AXObjectName, AXObjectModelDefinition>;
export default _default;
