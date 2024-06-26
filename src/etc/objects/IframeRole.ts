import type { AXObjectModelDefinition } from "../../../types.js";
const IframeRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "HTML",
      concept: {
        name: "iframe",
      },
    },
  ],
  type: "window",
};

export default IframeRole;
