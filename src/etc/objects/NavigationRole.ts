import type { AXObjectModelDefinition } from "../../types.js";
const NavigationRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "navigation",
      },
    },
    {
      module: "HTML",
      concept: {
        name: "nav",
      },
    },
  ],
  type: "structure",
};

export default NavigationRole;
