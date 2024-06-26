import type { AXObjectModelDefinition } from "../../types.js";
const DivRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "HTML",
      concept: {
        name: "div",
      },
    },
  ],
  type: "generic",
};

export default DivRole;
