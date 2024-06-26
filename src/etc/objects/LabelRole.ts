import type { AXObjectModelDefinition } from "../../types.js";
const LabelRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "HTML",
      concept: {
        name: "label",
      },
    },
  ],
  type: "structure",
};

export default LabelRole;
