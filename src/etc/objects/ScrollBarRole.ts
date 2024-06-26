import type { AXObjectModelDefinition } from "../../types.js";
const ScrollBarRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "scrollbar",
      },
    },
  ],
  type: "widget",
};

export default ScrollBarRole;
