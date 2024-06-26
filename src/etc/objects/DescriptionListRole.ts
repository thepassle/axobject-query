import type { AXObjectModelDefinition } from "../../types.js";
const DescriptionListRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "HTML",
      concept: {
        name: "dl",
      },
    },
  ],
  type: "structure",
};

export default DescriptionListRole;
