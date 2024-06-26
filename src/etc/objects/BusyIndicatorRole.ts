import type { AXObjectModelDefinition } from "../../types.js";
const BusyIndicatorRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        attributes: [
          {
            name: "aria-busy",
            value: "true",
          },
        ],
      },
    },
  ],
  type: "widget",
};

export default BusyIndicatorRole;
