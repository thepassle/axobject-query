import type { AXObjectModelDefinition } from "../../types.js";
const PresentationalRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "presentation",
      },
    },
  ],
  type: "structure",
};

export default PresentationalRole;
