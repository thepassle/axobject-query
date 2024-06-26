import type { AXObjectModelDefinition } from "../../types.js";
const MathRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "math",
      },
    },
  ],
  type: "structure",
};

export default MathRole;
