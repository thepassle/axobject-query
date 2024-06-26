import type { AXObjectModelDefinition } from "../../types.js";
const ToolbarRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "toolbar",
      },
    },
  ],
  type: "structure",
};

export default ToolbarRole;
