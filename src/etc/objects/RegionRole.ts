import type { AXObjectModelDefinition } from "../../types.js";
const RegionRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "region",
      },
    },
  ],
  type: "structure",
};

export default RegionRole;
