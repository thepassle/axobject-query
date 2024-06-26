import type { AXObjectModelDefinition } from "../../types.js";
const FigcaptionRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "HTML",
      concept: {
        name: "figcaption",
      },
    },
  ],
  type: "structure",
};

export default FigcaptionRole;
