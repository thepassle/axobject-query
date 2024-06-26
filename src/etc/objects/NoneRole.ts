import type { AXObjectModelDefinition } from "../../../types.js";
const NoneRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "none",
      },
    },
  ],
  type: "structure",
};

export default NoneRole;
