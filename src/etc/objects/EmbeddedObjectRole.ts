import type { AXObjectModelDefinition } from "../../types.js";
const EmbeddedObjectRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "HTML",
      concept: {
        name: "embed",
      },
    },
  ],
  type: "widget",
};

export default EmbeddedObjectRole;
