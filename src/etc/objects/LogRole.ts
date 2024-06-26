import type { AXObjectModelDefinition } from "../../types.js";
const LogRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "log",
      },
    },
  ],
  type: "structure",
};

export default LogRole;
