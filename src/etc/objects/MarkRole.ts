import type { AXObjectModelDefinition } from "../../types.js";
const MarkRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "HTML",
      concept: {
        name: "mark",
      },
    },
  ],
  type: "structure",
};

export default MarkRole;
