import type { AXObjectModelDefinition } from "../../types.js";
const ImageRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "img",
      },
    },
    {
      module: "HTML",
      concept: {
        name: "img",
      },
    },
  ],
  type: "structure",
};

export default ImageRole;
