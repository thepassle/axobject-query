import type { AXObjectModelDefinition } from "../../../types.js";
const AlertRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "alert",
      },
    },
  ],
  type: "structure",
};

export default AlertRole;
