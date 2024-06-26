import type { AXObjectModelDefinition } from "../../types.js";
const LineBreakRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "HTML",
      concept: {
        name: "br",
      },
    },
  ],
  type: "structure",
};

export default LineBreakRole;
