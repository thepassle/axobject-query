import type { AXObjectModelDefinition } from "../../types.js";
const CaptionRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "HTML",
      concept: {
        name: "caption",
      },
    },
  ],
  type: "structure",
};

export default CaptionRole;
