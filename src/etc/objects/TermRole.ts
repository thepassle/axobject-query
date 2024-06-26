import type { AXObjectModelDefinition } from "../../types.js";
const TermRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "term",
      },
    },
  ],
  type: "structure",
};

export default TermRole;
