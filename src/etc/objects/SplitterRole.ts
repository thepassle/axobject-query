import type { AXObjectModelDefinition } from "../../types.js";
const SplitterRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "separator",
      },
    },
  ],
  type: "widget",
};

export default SplitterRole;
