import type { AXObjectModelDefinition } from "../../types.js";
const ToggleButtonRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        attributes: [
          {
            name: "aria-pressed",
          },
        ],
      },
    },
  ],
  type: "widget",
};

export default ToggleButtonRole;
