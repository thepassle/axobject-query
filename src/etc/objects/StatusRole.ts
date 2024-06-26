import type { AXObjectModelDefinition } from "../../types.js";
const StatusRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "status",
      },
    },
  ],
  type: "structure",
};

export default StatusRole;
