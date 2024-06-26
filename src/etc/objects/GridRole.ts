import type { AXObjectModelDefinition } from "../../../types.js";
const GridRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "grid",
      },
    },
  ],
  type: "widget",
};

export default GridRole;
