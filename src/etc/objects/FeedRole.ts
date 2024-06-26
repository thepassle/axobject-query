import type { AXObjectModelDefinition } from "../../../types.js";
const FeedRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "feed",
      },
    },
  ],
  type: "structure",
};

export default FeedRole;
