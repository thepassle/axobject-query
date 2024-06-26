import type { AXObjectModelDefinition } from "../../types.js";
const RadioGroupRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "radiogroup",
      },
    },
  ],
  type: "structure",
};

export default RadioGroupRole;
