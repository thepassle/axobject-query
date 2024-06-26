import type { AXObjectModelDefinition } from "../../types.js";
const CanvasRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "HTML",
      concept: {
        name: "canvas",
      },
    },
  ],
  type: "widget",
};

export default CanvasRole;
