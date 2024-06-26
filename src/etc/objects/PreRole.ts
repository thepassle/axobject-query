import type { AXObjectModelDefinition } from "../../types.js";
const PreRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "HTML",
      concept: {
        name: "pre",
      },
    },
  ],
  type: "structure",
};

export default PreRole;
