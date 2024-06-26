import type { AXObjectModelDefinition } from "../../../types.js";
const GroupRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "group",
      },
    },
  ],
  type: "structure",
};

export default GroupRole;
