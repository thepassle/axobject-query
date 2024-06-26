import type { AXObjectModelDefinition } from "../../../types.js";
const TabListRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "tablist",
      },
    },
  ],
  type: "structure",
};

export default TabListRole;
