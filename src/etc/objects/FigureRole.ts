import type { AXObjectModelDefinition } from "../../../types.js";
const FigureRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "figure",
      },
    },
    {
      module: "HTML",
      concept: {
        name: "figure",
      },
    },
  ],
  type: "structure",
};

export default FigureRole;
