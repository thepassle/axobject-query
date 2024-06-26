import type { AXObjectModelDefinition } from "../../../types.js";
const BannerRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "banner",
      },
    },
  ],
  type: "structure",
};

export default BannerRole;
