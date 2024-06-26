import type { AXObjectModelDefinition } from "../../types.js";
const DocumentRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "document",
      },
    },
  ],
  type: "structure",
};

export default DocumentRole;
