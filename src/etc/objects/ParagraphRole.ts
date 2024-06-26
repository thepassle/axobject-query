import type { AXObjectModelDefinition } from "../../types.js";
const ParagraphRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "HTML",
      concept: {
        name: "p",
      },
    },
  ],
  type: "structure",
};

export default ParagraphRole;
