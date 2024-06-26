import type { AXObjectModelDefinition } from "../../types.js";
const LegendRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "HTML",
      concept: {
        name: "legend",
      },
    },
  ],
  type: "structure",
};

export default LegendRole;
