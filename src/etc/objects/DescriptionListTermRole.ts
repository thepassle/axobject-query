import type { AXObjectModelDefinition } from "../../types.js";
const DescriptionListTermRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "HTML",
      concept: {
        name: "dt",
      },
    },
  ],
  type: "structure",
};

export default DescriptionListTermRole;
