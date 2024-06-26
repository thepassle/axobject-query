import type { AXObjectModelDefinition } from "../../types.js";
const ProgressIndicatorRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "progressbar",
      },
    },
    {
      module: "HTML",
      concept: {
        name: "progress",
      },
    },
  ],
  type: "structure",
};

export default ProgressIndicatorRole;
