import type { AXObjectModelDefinition } from "../../types.js";
const RowRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "row",
      },
    },
    {
      module: "HTML",
      concept: {
        name: "tr",
      },
    },
  ],
  type: "structure",
};

export default RowRole;
