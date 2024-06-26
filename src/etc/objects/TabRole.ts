import type { AXObjectModelDefinition } from "../../types.js";
const TabRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "tab",
      },
    },
  ],
  type: "widget",
};

export default TabRole;
